import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nl8d8wbcz.css';
import '../../css/m/md1p39bnd.css';
import '../../css/w/waflsubxv.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nl8d8wbcz"/><path class="md1p39bnd"/><path class="waflsubxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:laos"} {...others} />);
}

export default Component;
