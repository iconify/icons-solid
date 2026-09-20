import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hliel1b1l.css';
import '../../css/p/p-b21_k3d.css';
import '../../css/a/au1i4acjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="hliel1b1l"/><path class="p-b21_k3d"/><path class="au1i4acjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:allowances-no-photos-sign"} {...others} />);
}

export default Component;
