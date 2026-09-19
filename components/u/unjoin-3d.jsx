import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmh1iue4y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wmh1iue4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:unjoin-3d"} {...others} />);
}

export default Component;
