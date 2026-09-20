import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fhn12jz8i.css';
import '../../css/d/dlkgg4zpw.css';
import '../../css/c/c29b-_v0n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fhn12jz8i"/><path class="dlkgg4zpw"/><path clip-rule="evenodd" class="c29b-_v0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:chess-knight-flat"} {...others} />);
}

export default Component;
