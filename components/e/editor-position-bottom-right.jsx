import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zci6vmbii.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zci6vmbii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:editor-position-bottom-right"} {...others} />);
}

export default Component;
