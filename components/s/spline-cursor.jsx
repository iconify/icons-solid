import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nncsronqw.css';
import '../../css/v/v3yu9caws.css';
import '../../css/x/xiqqrdb-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nncsronqw"/><path class="v3yu9caws"/><path class="xiqqrdb-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:spline-cursor"} {...others} />);
}

export default Component;
