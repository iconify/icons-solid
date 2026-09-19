import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9ms98rdy.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="b9ms98rdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:ice-cream"} {...others} />);
}

export default Component;
