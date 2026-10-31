import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnxrlvq5h.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nnxrlvq5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:gabled-building-with-garage-door"} {...others} />);
}

export default Component;
