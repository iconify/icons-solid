import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/n/nptj6xa9m.css';
import '../../css/w/w2tgfdchj.css';
import '../../css/l/lua0thbxm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="nptj6xa9m"/><path clip-rule="evenodd" class="w2tgfdchj"/><path class="lua0thbxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:printer"} {...others} />);
}

export default Component;
