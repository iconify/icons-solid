import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i505rwb9n {
  d: path("M5.172 3h13.656v3.724H5.172zm0 8.069h12.414v3.724h-8.69V21H5.173z");
}
</style><path class="i505rwb9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:fore"} {...others} />);
}

export default Component;
