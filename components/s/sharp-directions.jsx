import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jo-vwuqjn {
  fill: currentColor;
  d: path("M22.41 12L12 1.59L1.59 11.99L12 22.41zM14 14.5V12h-4v3H8v-5h6V7.5l3.5 3.5z");
}
</style><path class="jo-vwuqjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-directions"} {...others} />);
}

export default Component;
