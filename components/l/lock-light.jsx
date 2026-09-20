import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ygox79bep.css';
import '../../css/z/zy_fdbc1g.css';
import '../../css/j/jbrxmkbnr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="ygox79bep"/><path class="zy_fdbc1g"/><path class="jbrxmkbnr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:lock-light"} {...others} />);
}

export default Component;
