import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fzsskgb3l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fzsskgb3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:close-large-duocolor-round"} {...others} />);
}

export default Component;
