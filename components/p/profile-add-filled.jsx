import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tc5iivbxi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tc5iivbxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:profile-add-filled"} {...others} />);
}

export default Component;
