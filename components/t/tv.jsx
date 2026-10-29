import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjq-6db1p.css';
import '../../css/s/st7bm40ae.css';
import '../../css/m/mz609cc_k.css';
import '../../css/e/ea6yb7buv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vjq-6db1p wm-a"/><path class="st7bm40ae wm-k"/><path class="mz609cc_k wm-k"/><path class="ea6yb7buv wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:tv"} {...others} />);
}

export default Component;
