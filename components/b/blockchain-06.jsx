import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jkf_3mbfp.css';
import '../../css/t/tvnbxhb2o.css';
import '../../css/h/hb-wj9-hh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jkf_3mbfp"/><path class="tvnbxhb2o"/><path class="hb-wj9-hh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:blockchain-06"} {...others} />);
}

export default Component;
