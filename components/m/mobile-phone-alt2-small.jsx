import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvjgifbok.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="dvjgifbok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:mobile-phone-alt2-small"} {...others} />);
}

export default Component;
