import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fsc21xyjd.css';
import '../../css/j/j9dld7jrj.css';
import '../../css/i/ipo79vlap.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fsc21xyjd"/><path class="j9dld7jrj"/><path class="ipo79vlap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:safe-20"} {...others} />);
}

export default Component;
