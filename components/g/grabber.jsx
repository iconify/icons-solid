import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vo6ln3mqd.css';

const viewBox = {"width":8,"height":16};
const content = `<path class="vo6ln3mqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:grabber"} {...others} />);
}

export default Component;
