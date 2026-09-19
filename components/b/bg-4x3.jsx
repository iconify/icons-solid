import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbsiz1bro.css';
import '../../css/j/jt_ac1zjj.css';
import '../../css/c/c5zqg9bcz.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="fbsiz1bro"/><path class="jt_ac1zjj"/><path class="c5zqg9bcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:bg-4x3"} {...others} />);
}

export default Component;
