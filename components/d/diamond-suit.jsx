import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.pz5q1vbos {
  fill: var(--svg-color--be1931, #be1931);
  d: path("M18.437 35.747c-.242.337-.632.337-.874 0L5.314 18.612c-.242-.338-.242-.886 0-1.224L17.563.253c.242-.338.632-.338.874 0l12.25 17.135c.241.338.241.886 0 1.224z");
}
</style><path class="pz5q1vbos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:diamond-suit"} {...others} />);
}

export default Component;
