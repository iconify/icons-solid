import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qfckspb9n.css';
import '../../css/f/fpbdczbjj.css';
import '../../css/m/mk1fesm-h.css';
import '../../css/q/qdcfeub0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qfckspb9n"/><path class="fpbdczbjj"/><path class="mk1fesm-h"/><path class="qdcfeub0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:role-playing-games-icon-weapon-equipment-crate-chest"} {...others} />);
}

export default Component;
