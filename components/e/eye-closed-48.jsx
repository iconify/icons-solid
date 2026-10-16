import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hr43yyb3r.css';
import '../../css/v/vp5943bqh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hr43yyb3r"/><path class="vp5943bqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:eye-closed-48"} {...others} />);
}

export default Component;
