import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dtli1d3xo.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dtli1d3xo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:medal-ribbon-with-circle"} {...others} />);
}

export default Component;
