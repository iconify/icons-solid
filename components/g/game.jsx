import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw4-ouqqm.css';
import '../../css/l/l00-agwii.css';
import '../../css/a/anpxsm6qd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jw4-ouqqm"/><circle class="l00-agwii"/><circle class="anpxsm6qd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:game"} {...others} />);
}

export default Component;
