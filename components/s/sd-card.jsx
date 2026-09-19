import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/q/qpv4-xb_q.css';
import '../../css/c/co5bs60od.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG6erkcbvq"><g class="s9cl3zbei"><path clip-rule="evenodd" class="qpv4-xb_q"/><path class="co5bs60od"/></g></mask></defs><path mask="url(#SVG6erkcbvq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:sd-card"} {...others} />);
}

export default Component;
