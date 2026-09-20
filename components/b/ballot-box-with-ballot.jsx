import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2wb4r8nh.css';
import '../../css/k/ki2dhzb_s.css';
import '../../css/e/erawww1db.css';
import '../../css/t/t4luh_rqv.css';
import '../../css/p/pdbcndb0e.css';
import '../../css/x/x-63fr23v.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="s2wb4r8nh"/><path class="ki2dhzb_s"/><path class="erawww1db"/><path class="t4luh_rqv"/><path class="pdbcndb0e"/><path class="x-63fr23v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ballot-box-with-ballot"} {...others} />);
}

export default Component;
