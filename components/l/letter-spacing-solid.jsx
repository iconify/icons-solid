import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dd4144bzp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dd4144bzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:letter-spacing-solid"} {...others} />);
}

export default Component;
