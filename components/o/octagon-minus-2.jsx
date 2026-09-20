import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tl9f0ocwu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tl9f0ocwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:octagon-minus-2"} {...others} />);
}

export default Component;
