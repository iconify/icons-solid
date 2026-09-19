import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qw3cs8ayj.css';
import '../../css/i/iqhend93h.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="qw3cs8ayj"/><path class="iqhend93h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:logo-rackext"} {...others} />);
}

export default Component;
