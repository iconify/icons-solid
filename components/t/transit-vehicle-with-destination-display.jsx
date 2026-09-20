import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0n52ulmt.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="x0n52ulmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:transit-vehicle-with-destination-display"} {...others} />);
}

export default Component;
