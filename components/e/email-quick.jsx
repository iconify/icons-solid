import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbo5by-jd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tbo5by-jd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:email-quick"} {...others} />);
}

export default Component;
