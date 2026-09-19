import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/z/z9--icb2a.css';
import '../../css/z/zrmeq8vsu.css';
import '../../css/k/kb9zbkb1z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="z9--icb2a"/><path class="zrmeq8vsu"/><circle class="kb9zbkb1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sphere"} {...others} />);
}

export default Component;
