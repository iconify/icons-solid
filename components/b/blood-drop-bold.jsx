import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0rj-esre.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d0rj-esre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:blood-drop-bold"} {...others} />);
}

export default Component;
