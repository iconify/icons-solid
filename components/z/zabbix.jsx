import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrn8gobul.css';
import '../../css/d/dp_5ikbau.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="wrn8gobul"/><path class="dp_5ikbau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:zabbix"} {...others} />);
}

export default Component;
