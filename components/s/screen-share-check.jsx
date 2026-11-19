import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fsb5jkb2h.css';
import '../../css/b/b69e8vbjp.css';
import '../../css/v/v0f1cbbgj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fsb5jkb2h"/><path class="b69e8vbjp"/><path class="v0f1cbbgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:screen-share-check"} {...others} />);
}

export default Component;
