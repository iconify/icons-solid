import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udd-1hb1s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="udd-1hb1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:emergency-health-filled"} {...others} />);
}

export default Component;
