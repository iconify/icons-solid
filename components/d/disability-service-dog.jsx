import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hjyi-2bwz.css';
import '../../css/q/qdo1ibc6u.css';
import '../../css/a/amaijkbru.css';
import '../../css/v/voz8m8_db.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="hjyi-2bwz"/><path class="qdo1ibc6u"/><path class="amaijkbru"/><path class="voz8m8_db"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:disability-service-dog"} {...others} />);
}

export default Component;
