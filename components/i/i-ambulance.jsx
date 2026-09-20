import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5wn405-h.css';
import '../../css/b/bed8vacuq.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="d5wn405-h"/><path class="bed8vacuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-ambulance"} {...others} />);
}

export default Component;
