import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-goxttel.css';
import '../../css/y/y5q2uuoxo.css';
import '../../css/j/j8fadmb6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k-goxttel"/><path class="y5q2uuoxo"/><path clip-rule="evenodd" class="j8fadmb6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:image-scan"} {...others} />);
}

export default Component;
