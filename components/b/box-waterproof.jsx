import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/g/gg6l8lb4j.css';
import '../../css/n/nrknstb3z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="gg6l8lb4j"/><path class="nrknstb3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:box-waterproof"} {...others} />);
}

export default Component;
