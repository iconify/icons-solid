import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ugva07_4z.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vhklpmewb.css';
import '../../css/y/y1-snpblu.css';
import '../../css/t/t1pug1bay.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary ugva07_4z"/><g class="dt0cm9dhy primary"><path class="vhklpmewb"/><path class="y1-snpblu"/><path class="t1pug1bay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:first-aid-duo"} {...others} />);
}

export default Component;
