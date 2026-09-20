import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmjyyrb7s.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="bmjyyrb7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-magnet-design-magnet-snap-supplies-to-tool"} {...others} />);
}

export default Component;
