import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v4up8jrir.css';
import '../../css/k/kr-9nqi8d.css';
import '../../css/r/rr3e9gbit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="v4up8jrir"/><path class="kr-9nqi8d"/><path class="rr3e9gbit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:minimize-2"} {...others} />);
}

export default Component;
