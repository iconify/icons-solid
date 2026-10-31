import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgc3ywb0f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dgc3ywb0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:parrot-fill-round"} {...others} />);
}

export default Component;
