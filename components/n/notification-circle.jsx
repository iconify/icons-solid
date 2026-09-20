import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a7t0-2pev.css';
import '../../css/d/dgo34gb0r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a7t0-2pev"/><path class="dgo34gb0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:notification-circle"} {...others} />);
}

export default Component;
