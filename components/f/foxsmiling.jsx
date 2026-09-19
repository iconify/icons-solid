import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7zc2dxoc.css';
import '../../css/m/m_1_1mbyc.css';
import '../../css/r/r92e01bsh.css';
import '../../css/c/c61kdybqt.css';
import '../../css/u/uart3r6bo.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="a7zc2dxoc"/><path class="m_1_1mbyc"/><path class="r92e01bsh"/><path class="c61kdybqt"/><path class="uart3r6bo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:foxsmiling"} {...others} />);
}

export default Component;
