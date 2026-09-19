import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw_jc_5dy.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="iw_jc_5dy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-solid-circle-bold"} {...others} />);
}

export default Component;
