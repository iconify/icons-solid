import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmm9ddb9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fmm9ddb9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:swipe-down"} {...others} />);
}

export default Component;
