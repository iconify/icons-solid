import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rcdl9rkte.css';
import '../../css/a/a_svzjbjw.css';
import '../../css/o/ooxc1fbxg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rcdl9rkte"/><path class="a_svzjbjw"/><path class="ooxc1fbxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:clock-sparkle"} {...others} />);
}

export default Component;
