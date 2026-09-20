import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ha0nppz8t.css';
import '../../css/h/hhk88wzsr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ha0nppz8t"/><path class="hhk88wzsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:file-text"} {...others} />);
}

export default Component;
