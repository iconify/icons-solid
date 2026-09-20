import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gg9bohboc {
  fill: var(--svg-color--28dbd1, #28dbd1);
  d: path("M7.765 13.059L15.722 3l-3.198 7.941h3.711L8.352 21l3.171-7.941z");
}
</style><path class="gg9bohboc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:xrune"} {...others} />);
}

export default Component;
