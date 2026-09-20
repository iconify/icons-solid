import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkw51fnti.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="pkw51fnti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:house-with-flag-and-info-i"} {...others} />);
}

export default Component;
