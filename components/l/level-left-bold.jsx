import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz3eg4bhq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="oz3eg4bhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:level-left-bold"} {...others} />);
}

export default Component;
