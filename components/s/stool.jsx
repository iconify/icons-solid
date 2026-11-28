import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s-3b3ce9i.css';
import '../../css/i/iy-_h6bqy.css';
import '../../css/f/fh4sb3bjp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="s-3b3ce9i"/><path class="iy-_h6bqy"/><path class="fh4sb3bjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:stool"} {...others} />);
}

export default Component;
