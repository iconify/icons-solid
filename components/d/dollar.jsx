import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/moux05b6v.css';

const viewBox = {"width":12,"height":24};
const content = `<path class="moux05b6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:dollar"} {...others} />);
}

export default Component;
