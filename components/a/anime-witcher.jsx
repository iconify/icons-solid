import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.x_p78f8lx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m39.187 13.079l-7.03 21.842l-7.031-21.842l-7.031 21.842l-7.031-21.842M4.5 20.221l39 11.871");
}
</style><path class="x_p78f8lx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:anime-witcher"} {...others} />);
}

export default Component;
