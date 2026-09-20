import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lp8ths2ru.css';
import '../../css/s/sh2c4zurj.css';
import '../../css/m/mr-8bjj0a.css';
import '../../css/d/dk4d-tw4m.css';
import '../../css/y/yu34cgbqm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="lp8ths2ru"/><path clip-rule="evenodd" class="sh2c4zurj"/><path class="mr-8bjj0a"/><path class="dk4d-tw4m"/><path class="yu34cgbqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:speaker-2"} {...others} />);
}

export default Component;
