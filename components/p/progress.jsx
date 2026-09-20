import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":277};
const content = `<style>.vsaxc-spu {
  fill: var(--svg-color--5ce500, #5ce500);
  d: path("M63.017 260.487L2.769 223.492l60.248-35.871zm30.83 16.292V172.754L0 115.906l65.32-38.532l91.541 55.952v104.53zm90.932-12.793V119.229L57.516 41.861L128.24 0L256 74.049V221.17z");
}
</style><path class="vsaxc-spu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:progress"} {...others} />);
}

export default Component;
