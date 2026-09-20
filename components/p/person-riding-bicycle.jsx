import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2-1b2hsn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="i2-1b2hsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-riding-bicycle"} {...others} />);
}

export default Component;
