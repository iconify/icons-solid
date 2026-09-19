import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4-tzzbmd.css';
import '../../css/z/z_lgxqp8u.css';
import '../../css/t/ttsnun36c.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="n4-tzzbmd"/><path class="z_lgxqp8u"/><path class="ttsnun36c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:van-duo"} {...others} />);
}

export default Component;
