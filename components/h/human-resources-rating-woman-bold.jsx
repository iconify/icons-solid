import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vw0d3xbjt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vw0d3xbjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:human-resources-rating-woman-bold"} {...others} />);
}

export default Component;
