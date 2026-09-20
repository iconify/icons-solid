import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gw0v5yb-n.css';
import '../../css/f/f9b-7_qnh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gw0v5yb-n"/><path class="f9b-7_qnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:search-duotone"} {...others} />);
}

export default Component;
