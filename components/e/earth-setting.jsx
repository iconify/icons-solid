import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hsz1cbpjo.css';
import '../../css/u/uslk2qj5v.css';
import '../../css/q/quppf3-iq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hsz1cbpjo"/><path class="uslk2qj5v"/><path class="quppf3-iq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:earth-setting"} {...others} />);
}

export default Component;
