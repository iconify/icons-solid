import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uidqnq8xn.css';
import '../../css/e/ee30u9b4t.css';
import '../../css/w/wwcljmy-s.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="uidqnq8xn"/><path class="ee30u9b4t"/><path class="wwcljmy-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:user-profile-focus"} {...others} />);
}

export default Component;
