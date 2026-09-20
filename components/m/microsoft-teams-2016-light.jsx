import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/db_3tsw-j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="db_3tsw-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-teams-2016-light"} {...others} />);
}

export default Component;
