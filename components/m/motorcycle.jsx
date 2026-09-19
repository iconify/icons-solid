import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdpoi43ol.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rdpoi43ol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:motorcycle"} {...others} />);
}

export default Component;
