import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2wgqxb8y.css';
import '../../css/l/lilkeebel.css';
import '../../css/l/lanmsbbod.css';
import '../../css/m/mb4mok-2g.css';
import '../../css/l/ld5ndfs7e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e2wgqxb8y"/><path class="lilkeebel"/><path class="lanmsbbod"/><path class="mb4mok-2g"/><path class="ld5ndfs7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notebook-2-bold-duotone"} {...others} />);
}

export default Component;
