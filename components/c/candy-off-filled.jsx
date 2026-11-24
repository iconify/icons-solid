import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dj2q-yklp.css';
import '../../css/v/v7flhwbqh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dj2q-yklp"/><path class="v7flhwbqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:candy-off-filled"} {...others} />);
}

export default Component;
