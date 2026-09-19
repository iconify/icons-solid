import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iu5xwibvu.css';
import '../../css/n/nswg25bfm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iu5xwibvu"/><path class="nswg25bfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:street-view-filled"} {...others} />);
}

export default Component;
