import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iqke0hhzk.css';
import '../../css/h/h3j66jbeo.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="iqke0hhzk"/><path class="h3j66jbeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:deez"} {...others} />);
}

export default Component;
