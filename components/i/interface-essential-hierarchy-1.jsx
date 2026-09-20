import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1verwbwl.css';
import '../../css/g/g2r24b_3n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f1verwbwl"/><path class="g2r24b_3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-hierarchy-1"} {...others} />);
}

export default Component;
