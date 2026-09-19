import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xgfi7sblv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xgfi7sblv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:aircraft-game"} {...others} />);
}

export default Component;
