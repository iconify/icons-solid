import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.oexvrob8j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.5 16.5h13v10h-13zm-16 0h13m-13 5h13m0 5h-13m16 5h13m0 5h-13m-16-5h13v5h-13z");
}

.psk8w97uc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-33 5.89h37M33.25 5.5v5.637M14.75 5.5v5.637M24 5.5v5.637");
}
</style><path class="psk8w97uc"/><path class="oexvrob8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:smartnews"} {...others} />);
}

export default Component;
