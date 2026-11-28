import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9_i5_b0g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r9_i5_b0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ice-skate-solid"} {...others} />);
}

export default Component;
