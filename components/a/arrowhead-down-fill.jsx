import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/en1tw8sio.css';
import '../../css/n/nbwbgdb1f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="en1tw8sio"/><path class="nbwbgdb1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:arrowhead-down-fill"} {...others} />);
}

export default Component;
