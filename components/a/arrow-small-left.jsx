import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubn55kbyl.css';

const viewBox = {"width":6,"height":16};
const content = `<path class="ubn55kbyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:arrow-small-left"} {...others} />);
}

export default Component;
