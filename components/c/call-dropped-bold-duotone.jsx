import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fi6qtibex.css';
import '../../css/j/j05r12o9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fi6qtibex"/><path class="j05r12o9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:call-dropped-bold-duotone"} {...others} />);
}

export default Component;
