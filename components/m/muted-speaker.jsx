import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvd6fwb9u.css';
import '../../css/c/cy0gm1byi.css';
import '../../css/n/n0t-e50so.css';
import '../../css/b/bjw8llbbv.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="dvd6fwb9u"><path class="cy0gm1byi"/><path class="n0t-e50so"/></g><path class="bjw8llbbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:muted-speaker"} {...others} />);
}

export default Component;
