import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/y/yqyyyybpj.css';
import '../../css/q/qdb3q2bfe.css';
import '../../css/u/u0t-u-bdx.css';
import '../../css/u/uyps3wbnh.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGTo4G4dmc"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="yqyyyybpj"/><path class="qdb3q2bfe"/><path class="u0t-u-bdx"/><path class="uyps3wbnh"/></g></mask></defs><circle mask="url(#SVGTo4G4dmc)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:leave-circle-filled"} {...others} />);
}

export default Component;
