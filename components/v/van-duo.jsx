import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-fh0ib4u.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ij3vyybgh.css';
import '../../css/w/w3i1zx0jw.css';
import '../../css/t/toteg6s6e.css';
import '../../css/r/rt7fb-bar.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r-fh0ib4u secondary"/><g class="dt0cm9dhy primary"><path class="ij3vyybgh"/><path class="w3i1zx0jw"/><path class="toteg6s6e"/><path class="rt7fb-bar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:van-duo"} {...others} />);
}

export default Component;
