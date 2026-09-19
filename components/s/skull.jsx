import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aw-cmtbxz.css';
import '../../css/u/u3qkv6btp.css';
import '../../css/s/smde8tpuu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="aw-cmtbxz"/><path class="u3qkv6btp"/><path class="smde8tpuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:skull"} {...others} />);
}

export default Component;
