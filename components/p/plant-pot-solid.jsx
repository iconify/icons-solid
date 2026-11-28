import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4jqe6-xz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w4jqe6-xz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:plant-pot-solid"} {...others} />);
}

export default Component;
