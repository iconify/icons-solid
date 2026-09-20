import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/am0biv4xa.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="am0biv4xa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pickleball-paddle"} {...others} />);
}

export default Component;
