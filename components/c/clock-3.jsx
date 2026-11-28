import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzfi-7-ax.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nzfi-7-ax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:clock-3"} {...others} />);
}

export default Component;
