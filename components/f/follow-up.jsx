import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nsdfu7yhp.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/f/f0o4osb6u.css';
import '../../css/q/qu_nu0rme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nsdfu7yhp"/><g class="mc2zb0bvp"><path class="f0o4osb6u"/><path class="qu_nu0rme"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:follow-up"} {...others} />);
}

export default Component;
