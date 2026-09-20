import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vparq1b6w.css';
import '../../css/p/pl47spb1r.css';
import '../../css/u/uzcz6f94u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vparq1b6w"/><path class="pl47spb1r"/><path class="uzcz6f94u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:currency-bath-increase"} {...others} />);
}

export default Component;
