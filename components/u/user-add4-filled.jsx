import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdy4ny49e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zdy4ny49e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:user-add4-filled"} {...others} />);
}

export default Component;
