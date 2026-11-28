import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ypnt1e9an.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ypnt1e9an"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:stove-clock"} {...others} />);
}

export default Component;
