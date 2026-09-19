import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/b/bpuab2biq.css';
import '../../css/t/to3zn2b6e.css';
import '../../css/f/frzthrb6v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="bpuab2biq"/><path class="to3zn2b6e"/><path class="frzthrb6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:color-filter"} {...others} />);
}

export default Component;
