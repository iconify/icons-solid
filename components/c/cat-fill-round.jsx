import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u05b4hbjl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u05b4hbjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cat-fill-round"} {...others} />);
}

export default Component;
