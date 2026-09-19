import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7zc2dxoc.css';
import '../../css/m/m_1_1mbyc.css';
import '../../css/d/dkrf2cbie.css';
import '../../css/e/ejg03qbcs.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="a7zc2dxoc"/><path class="m_1_1mbyc"/><path class="dkrf2cbie"/><path class="ejg03qbcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:foxwry"} {...others} />);
}

export default Component;
