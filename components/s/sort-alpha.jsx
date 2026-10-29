import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/u4q198b1c.css';
import '../../css/j/j29kkdbvw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="u4q198b1c"/><path class="j29kkdbvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:sort-alpha"} {...others} />);
}

export default Component;
