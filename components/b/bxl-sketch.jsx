import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nn2ia_bag.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nn2ia_bag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-sketch"} {...others} />);
}

export default Component;
