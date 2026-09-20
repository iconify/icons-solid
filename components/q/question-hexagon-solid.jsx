import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xa1unaboj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xa1unaboj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:question-hexagon-solid"} {...others} />);
}

export default Component;
