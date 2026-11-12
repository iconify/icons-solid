import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k558oac7t.css';
import '../../css/o/op8oxgybq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="k558oac7t"/><path class="op8oxgybq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:format-list-numbered-rtl"} {...others} />);
}

export default Component;
