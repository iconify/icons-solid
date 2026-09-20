import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmw69mb4r.css';
import '../../css/w/w4c3hmsue.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dmw69mb4r"/><path class="w4c3hmsue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:more-information"} {...others} />);
}

export default Component;
