import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wycc4kp6s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wycc4kp6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:arrow-bottom-left-on-square-solid"} {...others} />);
}

export default Component;
