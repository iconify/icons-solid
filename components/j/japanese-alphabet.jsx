import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/c/c86jgvz3k.css';
import '../../css/l/ls0y62_4b.css';
import '../../css/d/d8asqki1b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="c86jgvz3k"/><path class="ls0y62_4b"/><path class="d8asqki1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:japanese-alphabet"} {...others} />);
}

export default Component;
