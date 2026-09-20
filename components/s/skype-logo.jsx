import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fcectbb2r.css';
import '../../css/e/e-m5subgl.css';
import '../../css/k/kyintmbtk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fcectbb2r"/><path class="e-m5subgl"/><path class="kyintmbtk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:skype-logo"} {...others} />);
}

export default Component;
