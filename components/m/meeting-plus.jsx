import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_q3-0bak.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_q3-0bak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:meeting-plus"} {...others} />);
}

export default Component;
