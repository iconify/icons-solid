import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n30y6gq7m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n30y6gq7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:visualbasic"} {...others} />);
}

export default Component;
