import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sz4geob8g {
  fill: currentColor;
  d: path("M3 17v-2h2v2zm3 0v-6h4V9H6V7h6v6H8v2h4v2zm7 0l3-5l-3-5h2l2 3.325L19 7h2l-3 5l3 5h-2l-2-3.325L15 17z");
}
</style><path class="sz4geob8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:speed-0-2x-sharp"} {...others} />);
}

export default Component;
