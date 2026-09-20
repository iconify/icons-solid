import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mk5hyp-iw.css';
import '../../css/d/dhnqkbc9f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mk5hyp-iw"/><path class="dhnqkbc9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:issue-tracked-by-16"} {...others} />);
}

export default Component;
