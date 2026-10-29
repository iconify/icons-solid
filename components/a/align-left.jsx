import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mh2c-ku4e.css';
import '../../css/d/d-fe0zkrl.css';
import '../../css/m/mvvzj2tgs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mh2c-ku4e wm-shadow"/><path class="d-fe0zkrl wm-k"/><path class="mvvzj2tgs wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:align-left"} {...others} />);
}

export default Component;
