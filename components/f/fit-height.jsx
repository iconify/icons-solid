import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/ufrnihbht.css';
import '../../css/f/fw99tkv7s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ufrnihbht"/><path class="fw99tkv7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:fit-height"} {...others} />);
}

export default Component;
