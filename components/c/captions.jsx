import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9nmfjvdw.css';
import '../../css/c/cj8t6iwqx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e9nmfjvdw wm-k"/><path class="cj8t6iwqx wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:captions"} {...others} />);
}

export default Component;
