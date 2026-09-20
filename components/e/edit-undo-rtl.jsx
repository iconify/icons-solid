import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvktn51hg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qvktn51hg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:edit-undo-rtl"} {...others} />);
}

export default Component;
