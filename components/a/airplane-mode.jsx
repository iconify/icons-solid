import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e1yqa-buz.css';
import '../../css/r/r-femsbxa.css';
import '../../css/s/s1lmhub7n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e1yqa-buz"/><path class="r-femsbxa"/><path class="s1lmhub7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:airplane-mode"} {...others} />);
}

export default Component;
