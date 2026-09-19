import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rqgj4jwat.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rqgj4jwat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:echo-studio-2nd"} {...others} />);
}

export default Component;
