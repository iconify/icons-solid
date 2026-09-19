import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zkb7h_7ul.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zkb7h_7ul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:navigation-outline"} {...others} />);
}

export default Component;
