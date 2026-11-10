import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sh2-7cbtf.css';
import '../../css/z/zcukp2pnt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sh2-7cbtf"/><path class="zcukp2pnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-combined"} {...others} />);
}

export default Component;
