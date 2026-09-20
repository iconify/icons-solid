import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ovjojutqj.css';
import '../../css/e/eh7hbn4kn.css';
import '../../css/k/khmubjb4h.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ovjojutqj"/><path class="eh7hbn4kn"/><path class="khmubjb4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:megaphone"} {...others} />);
}

export default Component;
