import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q09i7jb2a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q09i7jb2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:beginner"} {...others} />);
}

export default Component;
