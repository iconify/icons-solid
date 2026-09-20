import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dk__bbbih.css';
import '../../css/c/cl68f3slr.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dk__bbbih"/><path class="cl68f3slr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:grey-heart"} {...others} />);
}

export default Component;
