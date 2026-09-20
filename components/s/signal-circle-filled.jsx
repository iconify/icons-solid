import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/er2h4db9e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="er2h4db9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:signal-circle-filled"} {...others} />);
}

export default Component;
