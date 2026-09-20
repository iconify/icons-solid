import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-00eccfu.css';
import '../../css/i/i6o-cqbto.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w-00eccfu"/><path class="i6o-cqbto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:tracked-by-closed-not-planned-16"} {...others} />);
}

export default Component;
