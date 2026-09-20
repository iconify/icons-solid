import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ruey_6b6m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ruey_6b6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:slider-h-range"} {...others} />);
}

export default Component;
