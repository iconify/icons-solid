import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rp2f8wozq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rp2f8wozq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:book-solid"} {...others} />);
}

export default Component;
