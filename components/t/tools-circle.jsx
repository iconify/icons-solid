import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eio-gbbes.css';
import '../../css/o/ooils_6oo.css';
import '../../css/n/no4wsvg0e.css';
import '../../css/k/k5amzmb8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eio-gbbes"/><path class="ooils_6oo"/><path class="no4wsvg0e"/><path class="k5amzmb8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:tools-circle"} {...others} />);
}

export default Component;
