import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xysb1bnlr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xysb1bnlr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:alarm-clock-minus"} {...others} />);
}

export default Component;
