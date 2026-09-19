import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ekmxezb0z.css';
import '../../css/a/axrl_0xbh.css';
import '../../css/f/f9p-pmbhs.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ekmxezb0z"/><path class="axrl_0xbh"/><path class="f9p-pmbhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:pinched-fingers-medium-dark"} {...others} />);
}

export default Component;
