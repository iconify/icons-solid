import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/fono4sb0u.css';
import '../../css/g/glfu-ulem.css';
import '../../css/j/jn3ayb5ag.css';
import '../../css/w/w5qn3c7ko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="fono4sb0u wm-shadow"/><path class="glfu-ulem wm-shadow"/><path class="jn3ayb5ag"/><path class="w5qn3c7ko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:log-in"} {...others} />);
}

export default Component;
