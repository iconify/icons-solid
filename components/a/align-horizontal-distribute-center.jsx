import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6c46zggq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y6c46zggq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:align-horizontal-distribute-center"} {...others} />);
}

export default Component;
