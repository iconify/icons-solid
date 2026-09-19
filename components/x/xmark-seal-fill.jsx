import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmb40b8ah.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="nmb40b8ah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:xmark-seal-fill"} {...others} />);
}

export default Component;
