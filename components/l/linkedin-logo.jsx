import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c3cq-mbaa.css';
import '../../css/q/q8bs69b5n.css';
import '../../css/c/cyxiq1l7s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c3cq-mbaa"/><path class="q8bs69b5n"/><path class="cyxiq1l7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:linkedin-logo"} {...others} />);
}

export default Component;
