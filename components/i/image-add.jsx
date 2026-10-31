import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z9ibsrbjs.css';
import '../../css/h/hrdjmbc9r.css';
import '../../css/o/ob2hf8b8d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z9ibsrbjs"/><path class="hrdjmbc9r"/><path class="ob2hf8b8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:image-add"} {...others} />);
}

export default Component;
