import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bze383b6h.css';
import '../../css/p/ppuwdj0xa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bze383b6h"/><path class="ppuwdj0xa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:torch-48-bold"} {...others} />);
}

export default Component;
