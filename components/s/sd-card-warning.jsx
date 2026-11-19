import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lautcmbvg.css';
import '../../css/f/fjfrqq7go.css';
import '../../css/a/aflsk-a2u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lautcmbvg"/><path class="fjfrqq7go"/><path class="aflsk-a2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sd-card-warning"} {...others} />);
}

export default Component;
