import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4cxdgfzy.css';

const viewBox = {"width":13,"height":16};
const content = `<path class="w4cxdgfzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:bitcoin"} {...others} />);
}

export default Component;
