import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/suireybjr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="suireybjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:graph-box-multiple-outline"} {...others} />);
}

export default Component;
