import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t769otr5u.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="t769otr5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:people-sleeping-in-bunkbeds-in-eaved-open-gabled-building"} {...others} />);
}

export default Component;
