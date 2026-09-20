import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rrj-3pr-l.css';
import '../../css/a/alzpy97nw.css';
import '../../css/w/w0xawxcgs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rrj-3pr-l"/><path class="alzpy97nw"/><path class="w0xawxcgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:charging-flash-wifi-bold"} {...others} />);
}

export default Component;
