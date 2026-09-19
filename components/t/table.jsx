import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/p/p-5evnx4b.css';
import '../../css/o/o40lrnbfe.css';
import '../../css/g/gt1irsbye.css';
import '../../css/c/cvkdx-b0d.css';
import '../../css/t/tdvnu8b0b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><rect class="p-5evnx4b"/><path class="o40lrnbfe"/><path class="gt1irsbye"/><path class="cvkdx-b0d"/><path class="tdvnu8b0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:table"} {...others} />);
}

export default Component;
