import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/q/qiprx5bif.css';
import '../../css/h/hde0f9hoe.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><path class="qiprx5bif"/><circle class="hde0f9hoe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:check-circle-stroke-16"} {...others} />);
}

export default Component;
