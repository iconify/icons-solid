import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3s5gsb_s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="b3s5gsb_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:editor-undo"} {...others} />);
}

export default Component;
