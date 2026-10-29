import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m91g29p0v.css';
import '../../css/a/acti3litn.css';
import '../../css/s/sab5z8bmm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m91g29p0v wm-k"/><path class="acti3litn wm-a"/><path class="sab5z8bmm wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:scale"} {...others} />);
}

export default Component;
