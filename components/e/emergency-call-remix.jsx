import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rk4-s9iov.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rk4-s9iov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:emergency-call-remix"} {...others} />);
}

export default Component;
