import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z51j4rbpd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z51j4rbpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:military-rank-filled"} {...others} />);
}

export default Component;
