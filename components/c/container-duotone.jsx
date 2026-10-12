import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qps5svx2l.css';
import '../../css/d/d7tmwc-kq.css';
import '../../css/l/lbpgzetic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qps5svx2l"/><path class="d7tmwc-kq"/><path class="lbpgzetic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:container-duotone"} {...others} />);
}

export default Component;
