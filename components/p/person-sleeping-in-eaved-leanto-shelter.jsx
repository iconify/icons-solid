import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/my4upjy5t.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="my4upjy5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-sleeping-in-eaved-leanto-shelter"} {...others} />);
}

export default Component;
