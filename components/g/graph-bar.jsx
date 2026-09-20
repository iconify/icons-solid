import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n399bo9an.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n399bo9an"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:graph-bar"} {...others} />);
}

export default Component;
