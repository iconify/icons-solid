import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fzxvnhbpt.css';
import '../../css/p/pkmd6bcjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fzxvnhbpt"/><path class="pkmd6bcjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:arrow-reload-horizontal-2"} {...others} />);
}

export default Component;
