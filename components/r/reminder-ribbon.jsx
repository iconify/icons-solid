import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bfv-mo1dy.css';
import '../../css/n/n0rf62bgo.css';
import '../../css/c/c1xidzbgj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="bfv-mo1dy"/><path class="n0rf62bgo"/><path class="c1xidzbgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:reminder-ribbon"} {...others} />);
}

export default Component;
