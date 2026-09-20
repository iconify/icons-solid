import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gttq0eb_y.css';
import '../../css/f/f_iutkbbj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gttq0eb_y"/><path class="f_iutkbbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:love-it-break-bold"} {...others} />);
}

export default Component;
