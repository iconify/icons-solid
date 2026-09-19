import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjjkgobzp.css';
import '../../css/r/rj59v4bex.css';
import '../../css/m/mw383ebtg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="yjjkgobzp"/><path class="rj59v4bex"/><path class="mw383ebtg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:hand-with-index-finger-and-thumb-crossed-medium-light"} {...others} />);
}

export default Component;
