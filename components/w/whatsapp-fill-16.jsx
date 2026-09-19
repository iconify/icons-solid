import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tlvjibc5i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tlvjibc5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:whatsapp-fill-16"} {...others} />);
}

export default Component;
