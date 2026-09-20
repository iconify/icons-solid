import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ugq19dr1m.css';
import '../../css/e/evvg3r27v.css';
import '../../css/c/c9vb-8b2l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ugq19dr1m"/><path class="evvg3r27v"/><path class="c9vb-8b2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ticket"} {...others} />);
}

export default Component;
