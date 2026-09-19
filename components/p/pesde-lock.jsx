import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-_pmt2dx.css';
import '../../css/p/pzo7-bcrp.css';
import '../../css/b/b5c715bxk.css';
import '../../css/j/j9pr1dbin.css';
import '../../css/v/vzdy7glxj.css';

const viewBox = {"width":16,"height":16};
const content = `<path transform="matrix(.68907 0 0 .69117 -14.561 14.692)" class="y-_pmt2dx"/><path class="pzo7-bcrp"/><ellipse class="b5c715bxk"/><path class="j9pr1dbin"/><path class="vzdy7glxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:pesde-lock"} {...others} />);
}

export default Component;
