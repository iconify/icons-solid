import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qig0jrbck.css';
import '../../css/t/txunxsk1p.css';
import '../../css/k/k4zv6th2j.css';
import '../../css/z/zeqm8jz8e.css';
import '../../css/n/n_11z4psr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qig0jrbck wm-shadow"/><path class="txunxsk1p wm-shadow"/><path class="k4zv6th2j"/><path class="zeqm8jz8e"/><path class="n_11z4psr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:golf"} {...others} />);
}

export default Component;
