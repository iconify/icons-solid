import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nfqqq2-qh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nfqqq2-qh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:gender-male-female"} {...others} />);
}

export default Component;
