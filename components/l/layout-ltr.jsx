import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wf7wu2l-p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wf7wu2l-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:layout-ltr"} {...others} />);
}

export default Component;
