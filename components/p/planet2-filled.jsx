import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yj_rx7aix.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yj_rx7aix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:planet2-filled"} {...others} />);
}

export default Component;
