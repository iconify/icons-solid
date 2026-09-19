import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tz12mvlvv.css';
import '../../css/x/xnrsw1b2z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tz12mvlvv"/><path class="xnrsw1b2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:fish-alt"} {...others} />);
}

export default Component;
