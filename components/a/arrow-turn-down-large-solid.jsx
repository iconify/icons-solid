import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhv3jp_gm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fhv3jp_gm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:arrow-turn-down-large-solid"} {...others} />);
}

export default Component;
