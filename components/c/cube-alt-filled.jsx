import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shwe8vnzt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="shwe8vnzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:cube-alt-filled"} {...others} />);
}

export default Component;
