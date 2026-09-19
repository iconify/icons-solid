import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbwv4_vtb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qbwv4_vtb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:chart-appearance-alt"} {...others} />);
}

export default Component;
