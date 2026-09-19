import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pppmzfbvj.css';
import '../../css/q/qcygdsdwa.css';
import '../../css/w/wlu-m-uzr.css';
import '../../css/w/w23s_eziw.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="pppmzfbvj"/><path class="qcygdsdwa"/><path class="wlu-m-uzr"/><path class="w23s_eziw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:shower"} {...others} />);
}

export default Component;
