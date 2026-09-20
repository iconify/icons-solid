import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/i/iazw9mnub.css';
import '../../css/m/m_-7htfhf.css';
import '../../css/j/jx9zwdo5l.css';
import '../../css/z/zkwm8kbaw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="iazw9mnub"/><path class="m_-7htfhf"/><path class="jx9zwdo5l"/><path class="zkwm8kbaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:inbox"} {...others} />);
}

export default Component;
