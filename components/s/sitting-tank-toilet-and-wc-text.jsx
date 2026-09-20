import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfwbx1x2n.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jfwbx1x2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:sitting-tank-toilet-and-wc-text"} {...others} />);
}

export default Component;
