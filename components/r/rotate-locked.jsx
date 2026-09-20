import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wzdz90gow.css';
import '../../css/d/devx4xt0b.css';
import '../../css/h/hqqreeu3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wzdz90gow"/><path class="devx4xt0b"/><path class="hqqreeu3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:rotate-locked"} {...others} />);
}

export default Component;
