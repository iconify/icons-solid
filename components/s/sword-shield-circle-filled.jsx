import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/h/hgiw2j25x.css';
import '../../css/b/br7532bxz.css';
import '../../css/s/s2m_p0voo.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGQPKNCfIx"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="hgiw2j25x"/><path class="br7532bxz"/><path class="s2m_p0voo"/></g></mask></defs><circle mask="url(#SVGQPKNCfIx)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:sword-shield-circle-filled"} {...others} />);
}

export default Component;
