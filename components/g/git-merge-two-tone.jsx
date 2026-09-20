import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/ggrpqy6eh.css';
import '../../css/e/e82gl2bak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ggrpqy6eh"/><path class="e82gl2bak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-merge-two-tone"} {...others} />);
}

export default Component;
