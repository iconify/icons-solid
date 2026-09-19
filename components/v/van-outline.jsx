import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fh2z7k8ka.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="fh2z7k8ka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:van-outline"} {...others} />);
}

export default Component;
