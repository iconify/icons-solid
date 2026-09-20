import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-qyrzbdi.css';
import '../../css/h/h6wxg2fcl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n-qyrzbdi"/><path class="h6wxg2fcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:no-smaking-area-solid"} {...others} />);
}

export default Component;
