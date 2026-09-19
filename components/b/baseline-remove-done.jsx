import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lo6xe2b1r {
  fill: currentColor;
  d: path("m1.79 12l5.58 5.59L5.96 19L.37 13.41zm.45-7.78L12.9 14.89l-1.28 1.28L7.44 12l-1.41 1.41L11.62 19l2.69-2.69l4.89 4.89l1.41-1.41L3.65 2.81zm14.9 9.27L23.62 7L22.2 5.59l-6.48 6.48zM17.96 7l-1.41-1.41l-3.65 3.66l1.41 1.41z");
}
</style><path class="lo6xe2b1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-remove-done"} {...others} />);
}

export default Component;
