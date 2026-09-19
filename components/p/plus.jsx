import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7giafb7e.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/z/z0pt6bbyk.css';
import '../../css/j/jcsbf6brg.css';

const viewBox = {"width":48,"height":48};
const content = `<circle class="e7giafb7e"/><g class="n1mjunbsu"><path class="z0pt6bbyk"/><path class="jcsbf6brg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:plus"} {...others} />);
}

export default Component;
