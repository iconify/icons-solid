import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/of_es-dhf.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="of_es-dhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:bread-slice"} {...others} />);
}

export default Component;
