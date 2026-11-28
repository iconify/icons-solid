import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngo_hc0bz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ngo_hc0bz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:duck-solid"} {...others} />);
}

export default Component;
