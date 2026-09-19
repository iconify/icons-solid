import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7wx_cblu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="d7wx_cblu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:123-stroke-16"} {...others} />);
}

export default Component;
