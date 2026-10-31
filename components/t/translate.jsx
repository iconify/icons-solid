import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bs4jbobod.css';
import '../../css/x/xhon0gxle.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bs4jbobod"/><path class="xhon0gxle"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:translate"} {...others} />);
}

export default Component;
