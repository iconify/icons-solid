import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/j/j27ze1b2l.css';
import '../../css/j/jdxgfcblx.css';
import '../../css/f/fh-xrsb1t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="j27ze1b2l"/><circle class="jdxgfcblx"/><path class="fh-xrsb1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:sertificate-light"} {...others} />);
}

export default Component;
