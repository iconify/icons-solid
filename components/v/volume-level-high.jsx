import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejhsgz2nc.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ejhsgz2nc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:volume-level-high"} {...others} />);
}

export default Component;
