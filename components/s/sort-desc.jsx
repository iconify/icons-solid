import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrpqgccob.css';

const viewBox = {"width":1024,"height":1344};
const content = `<g transform="translate(0 1344) scale(1 -1)"><path class="yrpqgccob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:sort-desc"} {...others} />);
}

export default Component;
