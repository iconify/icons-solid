import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oly0nib0u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oly0nib0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-m-fill-round"} {...others} />);
}

export default Component;
