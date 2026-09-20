import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbn7s3nsg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vbn7s3nsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:newspaper-solid"} {...others} />);
}

export default Component;
