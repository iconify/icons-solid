import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x0-fphdzi.css';
import '../../css/k/k2ce7c_3l.css';
import '../../css/i/izpkg-04l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x0-fphdzi"/><path class="k2ce7c_3l"/><path class="izpkg-04l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:hourglass"} {...others} />);
}

export default Component;
