import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/l/ly67rybbe.css';
import '../../css/b/bvpe1-nac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="ly67rybbe"/><path class="bvpe1-nac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:align-offset-top-duotone"} {...others} />);
}

export default Component;
