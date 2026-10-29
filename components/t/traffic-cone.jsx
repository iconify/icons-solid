import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eoh0qgbbx.css';
import '../../css/v/v5i6l7b1q.css';
import '../../css/d/d-mnptbxt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eoh0qgbbx wm-k"/><path class="v5i6l7b1q wm-a"/><path class="d-mnptbxt wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:traffic-cone"} {...others} />);
}

export default Component;
