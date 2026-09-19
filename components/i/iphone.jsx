import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2reb_1-b.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="g2reb_1-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:iphone"} {...others} />);
}

export default Component;
