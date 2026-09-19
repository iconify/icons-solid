import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wp0_6tmzb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wp0_6tmzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-radio-button-on"} {...others} />);
}

export default Component;
