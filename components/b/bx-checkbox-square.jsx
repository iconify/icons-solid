import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9lfmybtd.css';
import '../../css/g/g6owz749s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s9lfmybtd"/><path class="g6owz749s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-checkbox-square"} {...others} />);
}

export default Component;
