import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b288f3byl.css';
import '../../css/g/g-cjy55ix.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b288f3byl"/><path class="g-cjy55ix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:microwave-duocolor-round"} {...others} />);
}

export default Component;
