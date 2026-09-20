import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g7kk0pbfc.css';
import '../../css/s/s43gu1b2k.css';
import '../../css/k/kq3qq5bpc.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="g7kk0pbfc"/><path class="s43gu1b2k"/><path class="kq3qq5bpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:responsive-design-hand"} {...others} />);
}

export default Component;
