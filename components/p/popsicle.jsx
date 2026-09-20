import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wlteh9bxn.css';
import '../../css/b/blhx95bup.css';
import '../../css/o/orzu1it2s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wlteh9bxn"/><path class="blhx95bup"/><path class="orzu1it2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:popsicle"} {...others} />);
}

export default Component;
