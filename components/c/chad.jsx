import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tfvcz_evv.css';
import '../../css/q/q03fz5bjx.css';
import '../../css/l/ldkk9pbbi.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="tfvcz_evv"/><path class="q03fz5bjx"/><path class="ldkk9pbbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:chad"} {...others} />);
}

export default Component;
