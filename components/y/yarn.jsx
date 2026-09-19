import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bry7-8gsd.css';
import '../../css/o/ocs25vtjs.css';
import '../../css/y/y1h7v0eew.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="bry7-8gsd"/><path class="ocs25vtjs"/><path class="y1h7v0eew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:yarn"} {...others} />);
}

export default Component;
