import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":232};
const content = `<style>.d7xarjb-e {
  fill: var(--svg-color--444, #444);
  d: path("m100.902 231.618l116.456-38.653L256 0H37.867L29.57 43.056h174.812l-5.443 27.49H23.862L15.3 113.602h174.823l-9.602 49.284l-70.547 23.076l-60.955-23.076l4.16-21.528H10.123L0 192.965z");
}
</style><path class="d7xarjb-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:css-3-official"} {...others} />);
}

export default Component;
