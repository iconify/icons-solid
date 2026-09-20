import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dytryc8hx {
  fill: currentColor;
  d: path("M7.025 11.825L8.4 9H11V2h7l-1 2l1 2h-5v3h2.5l1.425 2.85l-3 2L12 12.875l-1.925.975zM2 22l4.125-8.375l3.8 2.525L12 15.125l2.075 1.025l3.75-2.475L22 22z");
}
</style><path class="dytryc8hx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mountain-flag-sharp"} {...others} />);
}

export default Component;
