import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/do3r89v-g.css';

const viewBox = {"width":18,"height":24};
const content = `<path class="do3r89v-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:subway"} {...others} />);
}

export default Component;
