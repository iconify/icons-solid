import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xpj4vkbbe.css';
import '../../css/l/lohd83bha.css';
import '../../css/r/rpk44qb5q.css';
import '../../css/o/ouzjljbfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xpj4vkbbe"/><path class="lohd83bha"/><path class="rpk44qb5q"/><path class="ouzjljbfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:android-settings"} {...others} />);
}

export default Component;
