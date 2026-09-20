import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cew6qzb9g.css';
import '../../css/j/jfm4b5g2t.css';
import '../../css/h/hw1k-4b8v.css';
import '../../css/s/slg4b2kmi.css';
import '../../css/j/jp_4obfki.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cew6qzb9g"/><path class="jfm4b5g2t"/><path class="hw1k-4b8v"/><path class="slg4b2kmi"/><path class="jp_4obfki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:settings-4-duo"} {...others} />);
}

export default Component;
