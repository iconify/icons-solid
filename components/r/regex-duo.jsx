import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a0njtnbcl.css';
import '../../css/j/j5gwsvbqu.css';
import '../../css/g/gq6m_vbam.css';
import '../../css/d/dxir9oplz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="a0njtnbcl"/><path class="j5gwsvbqu"/><path class="gq6m_vbam"/><path class="dxir9oplz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:regex-duo"} {...others} />);
}

export default Component;
