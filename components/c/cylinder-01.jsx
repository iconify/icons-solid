import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1xtxw5-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g1xtxw5-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cylinder-01"} {...others} />);
}

export default Component;
