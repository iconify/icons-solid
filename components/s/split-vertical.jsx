import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sf1ga9s9a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="sf1ga9s9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:split-vertical"} {...others} />);
}

export default Component;
