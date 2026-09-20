import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n2neiybmu.css';
import '../../css/h/he2cb6v8q.css';
import '../../css/q/qhj_kmfui.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="n2neiybmu"/><path class="he2cb6v8q"/><path class="qhj_kmfui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:shop-cart"} {...others} />);
}

export default Component;
