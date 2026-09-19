import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/z/z6uzejnqn.css';
import '../../css/z/zb3vb8bsq.css';
import '../../css/g/gcbxz4b5g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="z6uzejnqn"/><path class="zb3vb8bsq"/><path class="gcbxz4b5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rotate"} {...others} />);
}

export default Component;
