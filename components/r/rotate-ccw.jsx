import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kx14ww5ye.css';
import '../../css/v/vje-gkoqo.css';
import '../../css/h/hrdjp705l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kx14ww5ye wm-k"/><path class="vje-gkoqo wm-a"/><path class="hrdjp705l wm-deco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:rotate-ccw"} {...others} />);
}

export default Component;
