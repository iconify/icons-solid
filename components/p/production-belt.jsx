import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/r/r41gcub-d.css';
import '../../css/k/kyqjb7bsd.css';
import '../../css/v/v74z9kkuq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="r41gcub-d"/><path class="kyqjb7bsd"/><path class="v74z9kkuq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:production-belt"} {...others} />);
}

export default Component;
