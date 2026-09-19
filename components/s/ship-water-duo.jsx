import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lqpvglbyf.css';
import '../../css/o/o_4gfppxf.css';
import '../../css/s/s3pfium6i.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="lqpvglbyf"/><path class="o_4gfppxf"/><path class="s3pfium6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:ship-water-duo"} {...others} />);
}

export default Component;
