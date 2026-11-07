import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mk7apdhpz.css';
import '../../css/f/fgrlfobbu.css';
import '../../css/d/d7jqjkbvm.css';
import '../../css/j/joaxcob9n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mk7apdhpz"/><path class="fgrlfobbu"/><path clip-rule="evenodd" class="d7jqjkbvm"/><path class="joaxcob9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:command-bold-duotone"} {...others} />);
}

export default Component;
