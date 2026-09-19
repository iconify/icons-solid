import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k25u__b7y.css';
import '../../css/c/cd7behbld.css';
import '../../css/r/rarfwo6sf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="k25u__b7y"/><path class="cd7behbld"/><path class="rarfwo6sf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:hand-with-index-finger-and-thumb-crossed-medium-dark"} {...others} />);
}

export default Component;
