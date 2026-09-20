import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_rmp6ypz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="u_rmp6ypz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pixel-three-inch-floppy-disk"} {...others} />);
}

export default Component;
