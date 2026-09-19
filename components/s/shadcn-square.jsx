import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5d3vjidn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b5d3vjidn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shadcn-square"} {...others} />);
}

export default Component;
