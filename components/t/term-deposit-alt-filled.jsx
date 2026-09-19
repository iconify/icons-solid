import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/apf4k87rl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="apf4k87rl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:term-deposit-alt-filled"} {...others} />);
}

export default Component;
