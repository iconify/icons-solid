import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufe5gzu4e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ufe5gzu4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:hot-air-balloon-solid"} {...others} />);
}

export default Component;
