import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvlu8fesh.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gvlu8fesh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:toll-booth"} {...others} />);
}

export default Component;
