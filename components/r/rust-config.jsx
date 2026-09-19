import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnh7u9f3r.css';
import '../../css/v/vo3vedbmo.css';
import '../../css/g/gfjx0h0sh.css';
import '../../css/c/cxs370dyl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gnh7u9f3r"/><g class="vo3vedbmo"><path transform="matrix(.79989 0 0 .79796 .1 -.697)" class="gfjx0h0sh"/><path transform="matrix(.79989 0 0 .79796 .1 -.697)" class="cxs370dyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:rust-config"} {...others} />);
}

export default Component;
