import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ikio23b7i.css';
import '../../css/j/j11oilb7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ikio23b7i"/><path class="j11oilb7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-branch-minus-duotone"} {...others} />);
}

export default Component;
