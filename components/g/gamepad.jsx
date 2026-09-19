import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8y58tbyk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n8y58tbyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:gamepad"} {...others} />);
}

export default Component;
