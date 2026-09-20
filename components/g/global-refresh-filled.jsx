import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jt7fexbhs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jt7fexbhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:global-refresh-filled"} {...others} />);
}

export default Component;
