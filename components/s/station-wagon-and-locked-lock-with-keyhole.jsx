import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbz91mu1r.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hbz91mu1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:station-wagon-and-locked-lock-with-keyhole"} {...others} />);
}

export default Component;
