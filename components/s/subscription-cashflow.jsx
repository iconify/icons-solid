import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zbjfupicf.css';
import '../../css/m/m_3aspbzd.css';
import '../../css/p/psq-e9bgh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="zbjfupicf"/><path class="m_3aspbzd"/><path class="psq-e9bgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:subscription-cashflow"} {...others} />);
}

export default Component;
