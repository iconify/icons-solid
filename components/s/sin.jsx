import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kk1hzjbgp.css';
import '../../css/m/md286fbip.css';
import '../../css/j/jzowogbqz.css';
import '../../css/w/wsyxhjaet.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="kk1hzjbgp"/><g class="md286fbip"><path class="jzowogbqz"/><path class="wsyxhjaet"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:sin"} {...others} />);
}

export default Component;
