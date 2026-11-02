import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ylmun4jqk {
  fill: currentColor;
  d: path("M22.141 9.01a1.001 1.001 0 0 1 .566 1.697l-4.636 4.636l.915 5.493a1 1 0 0 1-.392.968a1 1 0 0 1-1.041.09L12 19.118l-5.553 2.776a1 1 0 0 1-1.041-.09a1 1 0 0 1-.392-.968l.915-5.493l-4.636-4.636a1.001 1.001 0 0 1 .566-1.697l6.481-.926l2.766-5.531a.998.998 0 0 1 1.788 0l2.766 5.531ZM13 17.382l3.691 1.845l-.677-4.063a1 1 0 0 1 .279-.871l3.586-3.586l-5.02-.717a1 1 0 0 1-.753-.543L13 7.236Z");
}
</style><path class="ylmun4jqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:star-half-fill-round"} {...others} />);
}

export default Component;
