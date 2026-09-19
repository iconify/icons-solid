import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/id6rdh24x.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="id6rdh24x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pen-nib-outline"} {...others} />);
}

export default Component;
