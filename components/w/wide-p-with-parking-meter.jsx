import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zii5sn5at.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zii5sn5at"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:wide-p-with-parking-meter"} {...others} />);
}

export default Component;
