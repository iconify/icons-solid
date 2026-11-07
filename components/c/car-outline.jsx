import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-klr3bdo.css';
import '../../css/e/e8icw_b4f.css';
import '../../css/w/ws9d_1b9t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z-klr3bdo"/><path class="e8icw_b4f"/><path clip-rule="evenodd" class="ws9d_1b9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:car-outline"} {...others} />);
}

export default Component;
