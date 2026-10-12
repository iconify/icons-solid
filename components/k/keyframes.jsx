import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bfcbwwaex.css';
import '../../css/s/svs5gwb5u.css';
import '../../css/u/u-gwigb5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bfcbwwaex"/><path class="svs5gwb5u"/><path class="u-gwigb5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:keyframes"} {...others} />);
}

export default Component;
