import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1vh-bckm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r1vh-bckm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:diamond-1-solid"} {...others} />);
}

export default Component;
