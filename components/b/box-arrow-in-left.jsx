import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n8uesraxc.css';
import '../../css/e/e1v7t-bat.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="n8uesraxc"/><path class="e1v7t-bat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:box-arrow-in-left"} {...others} />);
}

export default Component;
