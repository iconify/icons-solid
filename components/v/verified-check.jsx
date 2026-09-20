import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ilhbiwonf.css';
import '../../css/q/qis60ub_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ilhbiwonf"/><path class="qis60ub_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:verified-check"} {...others} />);
}

export default Component;
