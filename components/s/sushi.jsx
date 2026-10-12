import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aiezjqbqh.css';
import '../../css/s/sfxx_qb6k.css';
import '../../css/b/b4887_bob.css';
import '../../css/c/c12oobcgq.css';
import '../../css/b/bj9cybb6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aiezjqbqh"/><path clip-rule="evenodd" class="sfxx_qb6k"/><path class="b4887_bob"/><path class="c12oobcgq"/><path class="bj9cybb6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sushi"} {...others} />);
}

export default Component;
