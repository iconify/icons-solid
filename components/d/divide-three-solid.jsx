import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqa3tkb1n.css';
import '../../css/i/ixpcsp8bg.css';
import '../../css/k/kgacrmxem.css';
import '../../css/e/ejn7m6b_g.css';
import '../../css/k/kw9jeleff.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="ixpcsp8bg"/><path class="kgacrmxem"/><path class="ejn7m6b_g"/><path class="kw9jeleff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:divide-three-solid"} {...others} />);
}

export default Component;
