import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lrcnysbjv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e77ebfb5e.css';
import '../../css/j/j-vfmlbqv.css';
import '../../css/y/y8_rbdbkf.css';
import '../../css/d/dlpf1aclt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lrcnysbjv secondary"/><g class="dt0cm9dhy primary"><path class="e77ebfb5e"/><path class="j-vfmlbqv"/><path class="y8_rbdbkf"/><path class="dlpf1aclt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:square-list-filter-duo"} {...others} />);
}

export default Component;
