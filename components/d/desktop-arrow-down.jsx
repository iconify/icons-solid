import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mo5s6toex.css';
import '../../css/q/qvwfepw7h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mo5s6toex"/><path class="qvwfepw7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:desktop-arrow-down"} {...others} />);
}

export default Component;
