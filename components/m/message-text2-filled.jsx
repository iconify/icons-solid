import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6fvp9b0e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u6fvp9b0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:message-text2-filled"} {...others} />);
}

export default Component;
