import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cdfgju1yx.css';
import '../../css/z/zo7ztcbje.css';
import '../../css/d/dh-88wgzw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cdfgju1yx"/><path clip-rule="evenodd" class="zo7ztcbje"/><path class="dh-88wgzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:yin-yang-symbol-flat"} {...others} />);
}

export default Component;
