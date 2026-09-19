import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z98z3cbeg.css';
import '../../css/e/eqpfmcb_l.css';
import '../../css/e/evodjt3ga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z98z3cbeg"/><path class="eqpfmcb_l"/><path class="evodjt3ga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:graph-document-infected-report"} {...others} />);
}

export default Component;
