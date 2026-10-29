import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9nmfjvdw.css';
import '../../css/r/r9swm8bzp.css';
import '../../css/y/y4nfpvt4g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e9nmfjvdw wm-k"/><path class="r9swm8bzp wm-k"/><path class="wm-a y4nfpvt4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:picture-in-picture"} {...others} />);
}

export default Component;
