import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mst3afbdz.css';
import '../../css/w/wa7hudb5j.css';
import '../../css/g/gl_1tcc4d.css';
import '../../css/o/oe1zm1b9v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mst3afbdz"/><path class="wa7hudb5j"/><path class="gl_1tcc4d"/><path class="oe1zm1b9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:sy-1x1"} {...others} />);
}

export default Component;
