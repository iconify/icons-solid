import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xoore9bru.css';
import '../../css/r/riiz-0est.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xoore9bru"/><path class="riiz-0est"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-sheets-dark"} {...others} />);
}

export default Component;
