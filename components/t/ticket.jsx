import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fqag3lg0a.css';
import '../../css/i/ins8vbbfb.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="fqag3lg0a"/><path class="ins8vbbfb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:ticket"} {...others} />);
}

export default Component;
