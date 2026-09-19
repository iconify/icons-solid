import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnbk1wqaj.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="rnbk1wqaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:file-h-t-m-l"} {...others} />);
}

export default Component;
