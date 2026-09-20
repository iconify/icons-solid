import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eyrzruisf.css';
import '../../css/i/i_pdceepo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="eyrzruisf"/><path class="i_pdceepo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:angry-ghost"} {...others} />);
}

export default Component;
