import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/q/qw-bbnb-p.css';
import '../../css/p/p13hsybvg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="qw-bbnb-p"/><path class="p13hsybvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:ios-ipados"} {...others} />);
}

export default Component;
