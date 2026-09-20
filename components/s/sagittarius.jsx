import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.qkzwymbli {
  fill: var(--svg-color--fcc21b, #fcc21b);
  d: path("M47.44 14.81v16.57h37.47L47.44 68.84l-15.6-15.6l-11.72 11.71l15.61 15.61l-20.92 20.91l11.72 11.72l20.91-20.92l15.61 15.6l11.71-11.71l-15.6-15.6l37.46-37.47v37.46h16.57V14.81z");
}
</style><path class="qkzwymbli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:sagittarius"} {...others} />);
}

export default Component;
