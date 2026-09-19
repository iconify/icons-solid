import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1ze04blp.css';
import '../../css/d/doshyacby.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n1ze04blp"/><path class="doshyacby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:layers-alt-filled"} {...others} />);
}

export default Component;
