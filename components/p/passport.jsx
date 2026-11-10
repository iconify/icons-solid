import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c0ttc0h5a.css';
import '../../css/i/ium5jsb-e.css';
import '../../css/l/lw235-qjo.css';
import '../../css/i/ikrlizb7r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c0ttc0h5a"/><path class="ium5jsb-e"/><path class="lw235-qjo"/><path class="ikrlizb7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:passport"} {...others} />);
}

export default Component;
