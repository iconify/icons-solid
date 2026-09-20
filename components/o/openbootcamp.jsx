import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycchbsbfz.css';
import '../../css/n/n0pg1wbbc.css';

const viewBox = {"width":70,"height":51};
const content = `<ellipse class="ycchbsbfz"/><path clip-rule="evenodd" class="n0pg1wbbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:openbootcamp"} {...others} />);
}

export default Component;
