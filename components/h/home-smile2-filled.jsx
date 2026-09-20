import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgj3g-brj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bgj3g-brj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:home-smile2-filled"} {...others} />);
}

export default Component;
