import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/m/mh6j-jb0n.css';
import '../../css/z/zvzu5zjds.css';
import '../../css/g/g-cvnihgk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><circle class="mh6j-jb0n"/><path clip-rule="evenodd" class="zvzu5zjds"/><path clip-rule="evenodd" class="g-cvnihgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:yawning-face"} {...others} />);
}

export default Component;
