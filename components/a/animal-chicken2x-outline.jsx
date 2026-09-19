import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/beh8lpbik.css';
import '../../css/a/axt58fw6s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="beh8lpbik"/><path clip-rule="evenodd" class="axt58fw6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:animal-chicken2x-outline"} {...others} />);
}

export default Component;
