import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pyby05dnj.css';
import '../../css/v/vdxxfnntj.css';
import '../../css/u/uevo4sbur.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pyby05dnj"/><path clip-rule="evenodd" class="vdxxfnntj"/><path class="uevo4sbur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:database-setting-flat"} {...others} />);
}

export default Component;
