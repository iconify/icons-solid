import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cdh8ldc3p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cdh8ldc3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:menu-burger-horizontal-bold"} {...others} />);
}

export default Component;
