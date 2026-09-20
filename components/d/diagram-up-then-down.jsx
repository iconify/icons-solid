import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmo9ppb1i.css';
import '../../css/j/jlv4cgy0n.css';
import '../../css/b/bpsgf019b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="lmo9ppb1i"><path class="jlv4cgy0n"/><path class="bpsgf019b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:diagram-up-then-down"} {...others} />);
}

export default Component;
