import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/be-q5ibtf.css';
import '../../css/o/oe3dp0-yz.css';
import '../../css/x/xsj4v2blh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="be-q5ibtf"/><path class="oe3dp0-yz"/><path class="xsj4v2blh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:stirling-pdf"} {...others} />);
}

export default Component;
