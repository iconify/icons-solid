import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yh5tb9bga.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yh5tb9bga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:toggle-off-filled"} {...others} />);
}

export default Component;
