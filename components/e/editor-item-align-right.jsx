import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3sxgqb8f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l3sxgqb8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:editor-item-align-right"} {...others} />);
}

export default Component;
