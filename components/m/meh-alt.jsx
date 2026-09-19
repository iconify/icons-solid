import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rm-s4bcxz.css';
import '../../css/b/bwibdw4bb.css';
import '../../css/d/dfqmxp8ok.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rm-s4bcxz"/><path class="bwibdw4bb"/><path class="dfqmxp8ok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:meh-alt"} {...others} />);
}

export default Component;
