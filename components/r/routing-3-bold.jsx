import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnytd9b5z.css';
import '../../css/k/kgc_53bqg.css';
import '../../css/u/ux7dfvzra.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hnytd9b5z"/><path class="kgc_53bqg"/><path class="ux7dfvzra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:routing-3-bold"} {...others} />);
}

export default Component;
