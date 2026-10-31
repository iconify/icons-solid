import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wk_ur4bbe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wk_ur4bbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-up-left-small-duotone-round"} {...others} />);
}

export default Component;
