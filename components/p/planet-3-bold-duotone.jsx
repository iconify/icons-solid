import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azy1lpbdu.css';
import '../../css/x/xwsg8i03s.css';
import '../../css/k/knfcb1bra.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="azy1lpbdu"/><path class="xwsg8i03s"/><path class="knfcb1bra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:planet-3-bold-duotone"} {...others} />);
}

export default Component;
