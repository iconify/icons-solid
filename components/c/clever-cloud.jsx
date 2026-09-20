import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti6iz-nxb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ti6iz-nxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:clever-cloud"} {...others} />);
}

export default Component;
