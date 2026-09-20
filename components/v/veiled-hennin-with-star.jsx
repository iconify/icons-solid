import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbsuls3hw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lbsuls3hw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:veiled-hennin-with-star"} {...others} />);
}

export default Component;
