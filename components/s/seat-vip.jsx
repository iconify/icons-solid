import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/phk9uibbc.css';
import '../../css/c/c5dd8mb9u.css';
import '../../css/h/h7sstobfk.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="phk9uibbc"/><path class="c5dd8mb9u"/><path class="h7sstobfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:seat-vip"} {...others} />);
}

export default Component;
