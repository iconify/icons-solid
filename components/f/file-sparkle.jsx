import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lmz-t6bds.css';
import '../../css/y/y8p7i1bbp.css';
import '../../css/h/h52hszbur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lmz-t6bds"/><path class="y8p7i1bbp"/><path class="h52hszbur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-sparkle"} {...others} />);
}

export default Component;
