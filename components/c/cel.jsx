import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlb-sobmx.css';
import '../../css/f/fv0846l_k.css';
import '../../css/m/m_fk-ibei.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rlb-sobmx"/><path class="fv0846l_k"/><path class="m_fk-ibei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cel"} {...others} />);
}

export default Component;
