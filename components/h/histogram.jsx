import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_aet5bdt.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="s_aet5bdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:histogram"} {...others} />);
}

export default Component;
