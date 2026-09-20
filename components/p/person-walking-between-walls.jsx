import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zc9lrubca.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zc9lrubca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-walking-between-walls"} {...others} />);
}

export default Component;
