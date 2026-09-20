import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z9edi6b_u.css';
import '../../css/k/kd06ylh6g.css';
import '../../css/e/einsz8zxl.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><circle class="z9edi6b_u"/><circle class="kd06ylh6g"/><circle class="einsz8zxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:status-preparing-borderless"} {...others} />);
}

export default Component;
