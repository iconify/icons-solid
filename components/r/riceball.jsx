import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3we5pccv.css';
import '../../css/t/tli6u_ttm.css';
import '../../css/b/b7ri4q8vc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z3we5pccv"/><path class="tli6u_ttm"/><path class="b7ri4q8vc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:riceball"} {...others} />);
}

export default Component;
