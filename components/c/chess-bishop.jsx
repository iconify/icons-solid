import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vm5eqsbdj.css';
import '../../css/g/gssv_m_oo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vm5eqsbdj"/><path class="gssv_m_oo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:chess-bishop"} {...others} />);
}

export default Component;
