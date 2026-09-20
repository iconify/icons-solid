import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qg8l-sbko.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qg8l-sbko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:number-1-box-outline"} {...others} />);
}

export default Component;
