import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ikio23b7i.css';
import '../../css/p/pek8tr53z.css';
import '../../css/o/oabjryw0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ikio23b7i"/><path class="pek8tr53z"/><path class="oabjryw0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-branch-plus-two-tone"} {...others} />);
}

export default Component;
