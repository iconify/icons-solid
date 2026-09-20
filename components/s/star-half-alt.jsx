import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1so0ab6o.css';
import '../../css/p/p1-cd6b4l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r1so0ab6o"/><path class="p1-cd6b4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:star-half-alt"} {...others} />);
}

export default Component;
