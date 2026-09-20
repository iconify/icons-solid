import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gp0egaclj.css';
import '../../css/x/xv25iejfn.css';
import '../../css/l/l606hpblz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="gp0egaclj"/><path class="xv25iejfn"/><circle class="l606hpblz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:center-focus-strong"} {...others} />);
}

export default Component;
