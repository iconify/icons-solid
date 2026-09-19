import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixfbf2bdb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ixfbf2bdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrow-expand-diagonal-01"} {...others} />);
}

export default Component;
