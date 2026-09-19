import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1n2l3blm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h1n2l3blm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:right-2-short-arrow"} {...others} />);
}

export default Component;
