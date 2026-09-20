import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqch9n6xp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jqch9n6xp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:folder-3"} {...others} />);
}

export default Component;
