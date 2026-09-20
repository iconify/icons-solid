import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aicwpsb6t.css';
import '../../css/z/zq5fh9b-i.css';
import '../../css/i/i1958g00u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aicwpsb6t"/><rect class="zq5fh9b-i"/><path class="i1958g00u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:document-layout-center"} {...others} />);
}

export default Component;
