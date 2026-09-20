import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ag7llacrj.css';
import '../../css/o/o80sgkb4p.css';
import '../../css/g/gw4m0pbbr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ag7llacrj"/><path class="o80sgkb4p"/><path class="gw4m0pbbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:flag"} {...others} />);
}

export default Component;
