import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/b/byz_v3i7h.css';
import '../../css/k/k2q6lueri.css';
import '../../css/e/e8pbn5_7a.css';
import '../../css/h/hg60d4b1o.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGMBjLgd6N"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="byz_v3i7h"/><path class="k2q6lueri"/><path class="e8pbn5_7a"/><path class="hg60d4b1o"/></g></mask></defs><circle mask="url(#SVGMBjLgd6N)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:yuan-circle-filled"} {...others} />);
}

export default Component;
