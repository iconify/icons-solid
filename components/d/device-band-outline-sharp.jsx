import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q7wixs2-u {
  fill: currentColor;
  d: path("M8.866 21V8.73h-.693V6.77h.693V3h6.25v3.77h.692v1.96h-.692V21zm1-12.75V20h4.25V8.25zm0-1h4.25V4h-4.25zm0 1h4.25zm0-1h4.25z");
}
</style><path class="q7wixs2-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:device-band-outline-sharp"} {...others} />);
}

export default Component;
