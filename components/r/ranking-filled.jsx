import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lu9gl7b9i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lu9gl7b9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:ranking-filled"} {...others} />);
}

export default Component;
