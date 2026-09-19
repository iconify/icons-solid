import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqb2u5bqj.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="jqb2u5bqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:clipboard-outline"} {...others} />);
}

export default Component;
