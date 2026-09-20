import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/urysg1b4n.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="urysg1b4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:doctor-briefcase"} {...others} />);
}

export default Component;
