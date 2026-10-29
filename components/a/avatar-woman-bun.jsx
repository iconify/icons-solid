import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a9-q5hp0a.css';
import '../../css/u/utgoxrrte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="a9-q5hp0a"/><path class="utgoxrrte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-woman-bun"} {...others} />);
}

export default Component;
