import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wa8f_iukb.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-4};
const content = `<path class="wa8f_iukb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:shopping-cart"} {...others} />);
}

export default Component;
