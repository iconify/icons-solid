import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdwsu1u1l.css';
import '../../css/x/x5y8bwbsk.css';
import '../../css/f/f1rdqjblo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tdwsu1u1l"/><path class="x5y8bwbsk"/><path class="f1rdqjblo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:gallery-play"} {...others} />);
}

export default Component;
