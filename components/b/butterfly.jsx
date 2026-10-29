import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lcdcp95yn.css';
import '../../css/e/ek49ispnp.css';
import '../../css/b/bpw454b8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lcdcp95yn wm-k"/><path class="ek49ispnp wm-k"/><path class="bpw454b8q wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:butterfly"} {...others} />);
}

export default Component;
