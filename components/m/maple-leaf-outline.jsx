import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_rwhnm2g.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="i_rwhnm2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:maple-leaf-outline"} {...others} />);
}

export default Component;
