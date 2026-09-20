import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqualhbgp.css';
import '../../css/v/v_pt9ob9w.css';
import '../../css/d/dcu62ebsh.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="gqualhbgp"/><path class="v_pt9ob9w"/><path class="dcu62ebsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:horizontal-black-octagon"} {...others} />);
}

export default Component;
