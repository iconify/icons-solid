import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmcxs6-ll.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="rmcxs6-ll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:compass-north-west"} {...others} />);
}

export default Component;
