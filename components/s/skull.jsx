import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tlurdrb3p.css';
import '../../css/e/etpgz9bon.css';
import '../../css/v/vm6pr9bdj.css';
import '../../css/o/od6e1z5th.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="tlurdrb3p wm-shadow"/><path class="etpgz9bon wm-shadow"/><path class="vm6pr9bdj"/><path class="od6e1z5th"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:skull"} {...others} />);
}

export default Component;
