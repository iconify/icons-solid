import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wx4veob7j.css';
import '../../css/m/mrjh5xbns.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="wx4veob7j"/><path class="mrjh5xbns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:wheelchair"} {...others} />);
}

export default Component;
