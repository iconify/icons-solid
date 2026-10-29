import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hk0frlb2j.css';
import '../../css/d/d2lm7gb0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hk0frlb2j"/><path class="d2lm7gb0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:variable"} {...others} />);
}

export default Component;
