import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/y/ypjg7bbdz.css';
import '../../css/n/n50kjvxhj.css';
import '../../css/d/d7mhh30wi.css';
import '../../css/k/kt5shjbak.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ypjg7bbdz"/><rect class="n50kjvxhj"/><path class="d7mhh30wi"/><path class="kt5shjbak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:juice"} {...others} />);
}

export default Component;
