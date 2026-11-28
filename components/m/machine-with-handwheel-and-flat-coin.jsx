import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pce7ff9sr.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="pce7ff9sr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:machine-with-handwheel-and-flat-coin"} {...others} />);
}

export default Component;
