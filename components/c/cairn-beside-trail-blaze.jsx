import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5stnbb3e.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="y5stnbb3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:cairn-beside-trail-blaze"} {...others} />);
}

export default Component;
