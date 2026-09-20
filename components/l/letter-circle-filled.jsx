import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/d/d-z4nbt_f.css';
import '../../css/t/t9kw69ekp.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGZtMa0bFa"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="d-z4nbt_f"/><path class="t9kw69ekp"/></g></mask></defs><circle mask="url(#SVGZtMa0bFa)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:letter-circle-filled"} {...others} />);
}

export default Component;
