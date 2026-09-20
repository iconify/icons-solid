import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/laeczcbca.css';
import '../../css/y/yb620cc9q.css';
import '../../css/a/aq91oiwjl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="laeczcbca"/><path class="yb620cc9q"/><path clip-rule="evenodd" class="aq91oiwjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:water-melon-flat"} {...others} />);
}

export default Component;
