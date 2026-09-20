import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngd0dh-ag.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ngd0dh-ag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:cc-diners-club"} {...others} />);
}

export default Component;
