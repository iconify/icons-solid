import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/akp692bkr.css';
import '../../css/g/gic9po5yn.css';
import '../../css/h/hhwgsyjct.css';
import '../../css/f/fquzhwn-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="akp692bkr wm-shadow"/><path class="gic9po5yn wm-shadow"/><path class="hhwgsyjct"/><path class="fquzhwn-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:volume"} {...others} />);
}

export default Component;
