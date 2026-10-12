import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x642spbbh.css';
import '../../css/v/v3yu9caws.css';
import '../../css/g/g6l6pvtuu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x642spbbh"/><path class="v3yu9caws"/><path class="g6l6pvtuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:spline"} {...others} />);
}

export default Component;
