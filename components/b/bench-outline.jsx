import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqhngwt5b.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="cqhngwt5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bench-outline"} {...others} />);
}

export default Component;
