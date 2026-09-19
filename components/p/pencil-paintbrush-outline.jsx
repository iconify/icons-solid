import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hjmsf2bdb.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="hjmsf2bdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pencil-paintbrush-outline"} {...others} />);
}

export default Component;
