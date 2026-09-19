import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vu_bbh2lp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vu_bbh2lp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cloud-angled-zap"} {...others} />);
}

export default Component;
