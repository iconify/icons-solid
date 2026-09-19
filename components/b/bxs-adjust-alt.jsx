import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jq7a0zbha.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jq7a0zbha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-adjust-alt"} {...others} />);
}

export default Component;
