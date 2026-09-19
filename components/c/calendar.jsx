import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3c0_-nfk.css';
import '../../css/g/g6i8-p-_n.css';

const viewBox = {"width":42,"height":42};
const content = `<path class="g3c0_-nfk"/><path class="g6i8-p-_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"topcoat:calendar"} {...others} />);
}

export default Component;
