import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g549aub-r.css';
import '../../css/m/mipxudk3z.css';
import '../../css/g/gtrou0bvy.css';
import '../../css/y/y5ske3qnv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse class="g549aub-r"/><path class="mipxudk3z"/><path class="gtrou0bvy"/><path class="y5ske3qnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:database-backup"} {...others} />);
}

export default Component;
