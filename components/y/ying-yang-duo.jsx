import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vyr8subuc.css';
import '../../css/b/b-0n9n53y.css';
import '../../css/s/sy3dwp2bt.css';
import '../../css/g/gzw9wyn5d.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vyr8subuc"/><path clip-rule="evenodd" class="b-0n9n53y"/><path class="sy3dwp2bt"/><path class="gzw9wyn5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:ying-yang-duo"} {...others} />);
}

export default Component;
