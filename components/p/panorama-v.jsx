import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nf2eccnhh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nf2eccnhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:panorama-v"} {...others} />);
}

export default Component;
