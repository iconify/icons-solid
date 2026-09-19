import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6gvdlb7i.css';
import '../../css/s/soi_5_bkg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l6gvdlb7i"/><path class="soi_5_bkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-out-up-left-stroke-square-filled"} {...others} />);
}

export default Component;
