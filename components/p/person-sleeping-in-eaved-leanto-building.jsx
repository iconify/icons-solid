import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr5o4wufh.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="tr5o4wufh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-sleeping-in-eaved-leanto-building"} {...others} />);
}

export default Component;
