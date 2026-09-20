import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mgsttyb0g.css';
import '../../css/b/bwuus6q9l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mgsttyb0g"/><path class="bwuus6q9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:git-branch-deleted"} {...others} />);
}

export default Component;
