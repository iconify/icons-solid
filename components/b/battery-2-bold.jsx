import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdbfdz6em.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="pdbfdz6em"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:battery-2-bold"} {...others} />);
}

export default Component;
