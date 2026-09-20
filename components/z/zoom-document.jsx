import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/f/fwd9lac5d.css';
import '../../css/q/qo-4spsiy.css';
import '../../css/d/d1_-z3bdd.css';
import '../../css/c/c-cg5rb1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="fwd9lac5d"/><path class="qo-4spsiy"/><path class="d1_-z3bdd"/><path class="c-cg5rb1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:zoom-document"} {...others} />);
}

export default Component;
