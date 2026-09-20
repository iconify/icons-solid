import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfvigbhfs.css';
import '../../css/j/j_3b95brn.css';
import '../../css/y/y-znr0b6r.css';
import '../../css/q/qo65jgw7u.css';
import '../../css/r/rsnld3n2z.css';
import '../../css/s/snpiwsb_l.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wfvigbhfs"/><path class="j_3b95brn"/><g transform="translate(-523.2 -12.34)scale(.3013)"><circle transform="translate(1736 40.96)scale(3.319)" class="y-znr0b6r"/><path class="qo65jgw7u"/><path class="rsnld3n2z"/></g><circle transform="scale(.99997)" class="snpiwsb_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:information"} {...others} />);
}

export default Component;
