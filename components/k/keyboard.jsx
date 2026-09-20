import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/t17m__b3j.css';
import '../../css/d/dmi6e-cds.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="t17m__b3j"/><path class="dmi6e-cds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:keyboard"} {...others} />);
}

export default Component;
