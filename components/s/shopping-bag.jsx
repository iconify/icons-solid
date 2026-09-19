import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dka9-7apg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dka9-7apg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:shopping-bag"} {...others} />);
}

export default Component;
