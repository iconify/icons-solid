import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":373};
const content = `<style>.ikl1hfb8q {
  fill: var(--svg-color--00d1b2, #00d1b2);
  d: path("M0 256L23.273 93.091L116.364 0l116.363 116.364l-69.818 69.818L256 279.273l-139.636 93.091z");
}
</style><path class="ikl1hfb8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:bulma"} {...others} />);
}

export default Component;
