import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bw6qw7b0w.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="bw6qw7b0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:hammer-outline"} {...others} />);
}

export default Component;
