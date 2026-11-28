import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onhx01o1b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="onhx01o1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:security-key-solid"} {...others} />);
}

export default Component;
