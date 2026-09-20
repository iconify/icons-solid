import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y6foxtgri.css';
import '../../css/v/vjw4_4bem.css';
import '../../css/o/orb04qb6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="y6foxtgri"/><path class="vjw4_4bem"/><path class="orb04qb6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:video-game-controller-team"} {...others} />);
}

export default Component;
