import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f9-ia0b3w.css';
import '../../css/m/md286fbip.css';
import '../../css/v/vto4svfiq.css';
import '../../css/s/s0ju3ibka.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="f9-ia0b3w"/><g class="md286fbip"><path class="vto4svfiq"/><path class="s0ju3ibka"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:usdc"} {...others} />);
}

export default Component;
