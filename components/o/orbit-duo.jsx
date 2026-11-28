import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gj4s0q_ul.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n8vpwlbbm.css';
import '../../css/q/q7y-vobgy.css';
import '../../css/g/gveaibcqj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gj4s0q_ul secondary"/><g class="dt0cm9dhy primary"><circle class="n8vpwlbbm"/><path class="q7y-vobgy"/><circle class="gveaibcqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:orbit-duo"} {...others} />);
}

export default Component;
