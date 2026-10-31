import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/frfhp39os.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="frfhp39os"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:pen-tool-fill-round"} {...others} />);
}

export default Component;
