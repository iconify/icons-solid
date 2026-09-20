import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r2ttem38m.css';
import '../../css/e/ejsp1wp8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r2ttem38m"/><path class="ejsp1wp8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-merge-fill"} {...others} />);
}

export default Component;
