import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nmg98gbkl.css';
import '../../css/l/l2vpsbbcf.css';
import '../../css/y/yas3t76qm.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nmg98gbkl"/><path class="l2vpsbbcf"/><path class="yas3t76qm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:security-it-service"} {...others} />);
}

export default Component;
