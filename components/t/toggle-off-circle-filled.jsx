import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_zj9e2le.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s_zj9e2le"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:toggle-off-circle-filled"} {...others} />);
}

export default Component;
