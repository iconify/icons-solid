import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rj_svym1d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rj_svym1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:arrow-cursor-1-solid"} {...others} />);
}

export default Component;
