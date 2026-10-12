import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y4yt5jxac.css';
import '../../css/r/rapwtibdy.css';
import '../../css/g/gmnui7bgf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y4yt5jxac"/><path class="rapwtibdy"/><path class="gmnui7bgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:stroke-cap-square"} {...others} />);
}

export default Component;
