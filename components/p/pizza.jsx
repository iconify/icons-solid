import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dm1xl7-wa.css';
import '../../css/j/jxryw3brs.css';
import '../../css/c/c2gys6bci.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="dm1xl7-wa"/><path class="jxryw3brs"/><path class="c2gys6bci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:pizza"} {...others} />);
}

export default Component;
