import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8cnf1h0z.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="h8cnf1h0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:trash-1-bold"} {...others} />);
}

export default Component;
