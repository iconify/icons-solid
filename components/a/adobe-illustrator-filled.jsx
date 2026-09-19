import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/od80o1xlt.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="od80o1xlt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:adobe-illustrator-filled"} {...others} />);
}

export default Component;
