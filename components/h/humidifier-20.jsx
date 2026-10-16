import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m21xs_4fm.css';
import '../../css/u/u3htxq4vz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m21xs_4fm"/><path class="u3htxq4vz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:humidifier-20"} {...others} />);
}

export default Component;
