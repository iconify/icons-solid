import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9db1vhft.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o9db1vhft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:layout-rightbar-close-line"} {...others} />);
}

export default Component;
