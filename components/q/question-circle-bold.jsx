import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df1uvuf1m.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="df1uvuf1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:question-circle-bold"} {...others} />);
}

export default Component;
