import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/doq3m8b6r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="doq3m8b6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:tagesschau24"} {...others} />);
}

export default Component;
