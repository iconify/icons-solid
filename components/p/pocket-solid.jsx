import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7knxr4qd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="u7knxr4qd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:pocket-solid"} {...others} />);
}

export default Component;
