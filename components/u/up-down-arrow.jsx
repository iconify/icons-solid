import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7cjjcbnv.css';
import '../../css/w/w82a4gxog.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="x7cjjcbnv"/><path class="w82a4gxog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:up-down-arrow"} {...others} />);
}

export default Component;
