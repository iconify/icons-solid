import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pigk12xyw.css';
import '../../css/y/y_8olsb-j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pigk12xyw"/><path clip-rule="evenodd" class="y_8olsb-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:torus-filled"} {...others} />);
}

export default Component;
