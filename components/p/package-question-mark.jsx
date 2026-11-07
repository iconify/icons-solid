import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b3ot1kbka.css';
import '../../css/o/o88qk5-dk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b3ot1kbka"/><path class="o88qk5-dk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:package-question-mark"} {...others} />);
}

export default Component;
