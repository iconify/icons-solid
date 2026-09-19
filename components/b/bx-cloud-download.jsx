import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/se_exubjd.css';
import '../../css/c/cdr84abnq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="se_exubjd"/><path class="cdr84abnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-cloud-download"} {...others} />);
}

export default Component;
