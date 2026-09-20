import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/c/cx5cq0pcw.css';
import '../../css/k/kv8lp-b9a.css';
import '../../css/e/ef-o7abje.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVG7IzrdeNF"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="cx5cq0pcw"/><path class="kv8lp-b9a"/><path class="ef-o7abje"/></g></mask></defs><circle mask="url(#SVG7IzrdeNF)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:person-checkmark-circle-filled"} {...others} />);
}

export default Component;
