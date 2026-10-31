import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q7i8brbqj.css';
import '../../css/p/ppdzzsb6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q7i8brbqj"/><path class="ppdzzsb6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:git-commit-duocolor-round"} {...others} />);
}

export default Component;
