import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsg7zgmqr.css';

const viewBox = {"width":27,"height":24};
const content = `<path class="tsg7zgmqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:google-drive"} {...others} />);
}

export default Component;
