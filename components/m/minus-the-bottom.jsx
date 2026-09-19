import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/i6waueonu.css';
import '../../css/o/oofktvbua.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="i6waueonu"/><path class="oofktvbua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:minus-the-bottom"} {...others} />);
}

export default Component;
