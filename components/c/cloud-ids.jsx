import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp5ecabad.css';
import '../../css/y/ydng6ub1v.css';
import '../../css/o/omk7q06vg.css';
import '../../css/c/ceddezowq.css';
import '../../css/g/gxa31hbik.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xp5ecabad"/><path class="ydng6ub1v"/><path class="omk7q06vg"/><path class="ceddezowq"/><path class="gxa31hbik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-ids"} {...others} />);
}

export default Component;
