import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eb9-j8tpe.css';
import '../../css/o/oyny2mu2z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="eb9-j8tpe"/><path class="oyny2mu2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:stomach-cancer-outline"} {...others} />);
}

export default Component;
