import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rw3alhbkd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rw3alhbkd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:letter-p-box-outline"} {...others} />);
}

export default Component;
