import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_dnl3bgj.css';
import '../../css/o/ote0d1bdp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z_dnl3bgj"/><path class="ote0d1bdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:coqui"} {...others} />);
}

export default Component;
