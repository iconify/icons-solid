import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/frov4f2kr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="frov4f2kr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:mail-refresh"} {...others} />);
}

export default Component;
