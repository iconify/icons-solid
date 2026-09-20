import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cefw7kb1y.css';
import '../../css/p/pfyahacbh.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cefw7kb1y"/><path class="pfyahacbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:left-right-arrow"} {...others} />);
}

export default Component;
