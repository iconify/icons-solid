import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5s43x33f.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="l5s43x33f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:thatched-roof-hut"} {...others} />);
}

export default Component;
