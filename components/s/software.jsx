import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u18-8t45l.css';
import '../../css/b/b4m9bdbre.css';
import '../../css/k/kw1v3sw6f.css';
import '../../css/c/ci7msrgpo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="u18-8t45l"/><path class="b4m9bdbre"/><path class="kw1v3sw6f"/><path class="ci7msrgpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:software"} {...others} />);
}

export default Component;
