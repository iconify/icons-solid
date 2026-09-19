import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egwn_np2o.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="egwn_np2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:comment-asterisk-bold"} {...others} />);
}

export default Component;
