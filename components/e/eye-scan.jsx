import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ttjdcl2va.css';
import '../../css/r/rrn5x25ge.css';
import '../../css/r/r4gptjifp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ttjdcl2va"/><circle class="rrn5x25ge"/><path clip-rule="evenodd" class="r4gptjifp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:eye-scan"} {...others} />);
}

export default Component;
