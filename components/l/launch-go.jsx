import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u_5qiye1h.css';
import '../../css/a/a54gp9nlm.css';
import '../../css/v/vnu5z5b4t.css';
import '../../css/q/q6n9uhf1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u_5qiye1h"/><path class="a54gp9nlm"/><path class="vnu5z5b4t"/><path class="q6n9uhf1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:launch-go"} {...others} />);
}

export default Component;
