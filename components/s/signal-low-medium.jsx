import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oe2mwubtg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oe2mwubtg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:signal-low-medium"} {...others} />);
}

export default Component;
