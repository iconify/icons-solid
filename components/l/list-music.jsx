import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bt79rrb-y.css';
import '../../css/t/th0jcu54c.css';
import '../../css/u/ugxrr-hjp.css';
import '../../css/n/n2q0nac6i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bt79rrb-y wm-k"/><path class="th0jcu54c wm-a"/><path class="ugxrr-hjp wm-a"/><path class="n2q0nac6i wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:list-music"} {...others} />);
}

export default Component;
