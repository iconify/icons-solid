import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wr8qrx7dc.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="wr8qrx7dc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:store-outline"} {...others} />);
}

export default Component;
