import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wb3z14vnz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wb3z14vnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:escalator-down-arrow"} {...others} />);
}

export default Component;
