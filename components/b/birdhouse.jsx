import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qh6i7b82a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qh6i7b82a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:birdhouse"} {...others} />);
}

export default Component;
