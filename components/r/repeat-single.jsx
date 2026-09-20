import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/spgvm6bsw.css';
import '../../css/h/hl92zac0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="spgvm6bsw"/><path class="hl92zac0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:repeat-single"} {...others} />);
}

export default Component;
