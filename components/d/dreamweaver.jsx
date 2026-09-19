import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oiy7b0mbe.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="oiy7b0mbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:dreamweaver"} {...others} />);
}

export default Component;
