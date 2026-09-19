import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbf3dqbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qbf3dqbzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:alarm-filled"} {...others} />);
}

export default Component;
