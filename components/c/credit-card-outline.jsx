import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tta7sbo4k.css';
import '../../css/v/vwq36dbtv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tta7sbo4k"/><path class="vwq36dbtv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:credit-card-outline"} {...others} />);
}

export default Component;
