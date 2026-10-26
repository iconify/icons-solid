import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfzmct09b.css';
import '../../css/x/xkn94gxsg.css';

const viewBox = {"width":180,"height":180};
const content = `<path class="lfzmct09b"/><circle class="xkn94gxsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:docuseal"} {...others} />);
}

export default Component;
