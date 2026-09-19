import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/p/p94f6-bxk.css';
import '../../css/c/clhd33euh.css';
import '../../css/e/e59rqodku.css';
import '../../css/j/jmvmbrxfl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="p94f6-bxk"/><path class="clhd33euh"/><path class="e59rqodku"/><path class="jmvmbrxfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:entertainment"} {...others} />);
}

export default Component;
