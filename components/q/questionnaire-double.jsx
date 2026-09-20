import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4f4eeb9g.css';
import '../../css/e/evlqlmbrr.css';
import '../../css/o/o9dcfwc7y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f4f4eeb9g"/><path class="evlqlmbrr"/><path class="o9dcfwc7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:questionnaire-double"} {...others} />);
}

export default Component;
