import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fyjspsb8d.css';

const viewBox = {"width":29,"height":24};
const content = `<path class="fyjspsb8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:table-2"} {...others} />);
}

export default Component;
