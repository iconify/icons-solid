import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8oiug1hh.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="s8oiug1hh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:gabled-building-with-flag-and-door"} {...others} />);
}

export default Component;
