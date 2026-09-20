import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sca6t74it.css';
import '../../css/j/jhy85ybic.css';
import '../../css/d/dt-n9cfoi.css';
import '../../css/c/cledxrbua.css';
import '../../css/m/man57ac8g.css';
import '../../css/y/yezftpm-z.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="sca6t74it"/><path class="jhy85ybic"/><path class="dt-n9cfoi"/><path class="cledxrbua"/><path class="man57ac8g"/><path class="yezftpm-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:badger"} {...others} />);
}

export default Component;
