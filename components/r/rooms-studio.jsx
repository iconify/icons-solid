import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nez8o-1lc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nez8o-1lc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:rooms-studio"} {...others} />);
}

export default Component;
