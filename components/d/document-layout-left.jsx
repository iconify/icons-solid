import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_ieabb_g.css';
import '../../css/r/r2qotkj1w.css';
import '../../css/i/i1958g00u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j_ieabb_g"/><rect class="r2qotkj1w"/><path class="i1958g00u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:document-layout-left"} {...others} />);
}

export default Component;
