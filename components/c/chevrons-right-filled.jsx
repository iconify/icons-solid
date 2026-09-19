import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/attzhvbqz.css';
import '../../css/v/vzeo59nus.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="attzhvbqz"/><path class="vzeo59nus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:chevrons-right-filled"} {...others} />);
}

export default Component;
