import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3308_fmz.css';
import '../../css/e/e2itionyx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x3308_fmz"/><path class="e2itionyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:scan-barcode-filled"} {...others} />);
}

export default Component;
