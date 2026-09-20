import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6adllzai.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="g6adllzai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:briefcase-bolt"} {...others} />);
}

export default Component;
