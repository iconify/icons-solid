import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpehaf3is.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="qpehaf3is"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:travel-bus"} {...others} />);
}

export default Component;
