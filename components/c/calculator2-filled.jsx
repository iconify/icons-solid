import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xy3f9p5rh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xy3f9p5rh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:calculator2-filled"} {...others} />);
}

export default Component;
