import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/h/h3ohaub8n.css';
import '../../css/z/zzdwj77ik.css';
import '../../css/g/g3e5numxe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="h3ohaub8n"/><path class="zzdwj77ik"/><path class="g3e5numxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:clue"} {...others} />);
}

export default Component;
