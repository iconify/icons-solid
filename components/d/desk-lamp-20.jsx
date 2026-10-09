import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh-egpbpk.css';
import '../../css/p/pzb63_vzh.css';
import '../../css/n/n4ap65bfk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sh-egpbpk"/><path class="pzb63_vzh"/><path class="n4ap65bfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:desk-lamp-20"} {...others} />);
}

export default Component;
