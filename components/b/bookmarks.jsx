import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q5grikb9l.css';
import '../../css/e/ea4hdqlwd.css';
import '../../css/o/ohmludbae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q5grikb9l"/><path class="ea4hdqlwd"/><path class="ohmludbae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bookmarks"} {...others} />);
}

export default Component;
