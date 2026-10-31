import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m7x8mubvw.css';
import '../../css/y/yk_hhruzq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m7x8mubvw"/><path class="yk_hhruzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:git-branch-duocolor-round"} {...others} />);
}

export default Component;
