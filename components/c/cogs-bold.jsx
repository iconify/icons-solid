import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9pe_nrcw.css';

const viewBox = {"width":84,"height":80};
const content = `<path clip-rule="evenodd" class="r9pe_nrcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:cogs-bold"} {...others} />);
}

export default Component;
