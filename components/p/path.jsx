import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dgw0anjer.css';
import '../../css/h/hhr-dvt9p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dgw0anjer"/><path class="hhr-dvt9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:path"} {...others} />);
}

export default Component;
