import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z92us65vz.css';
import '../../css/r/ruzjusbdh.css';
import '../../css/i/i-v3skr5d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="z92us65vz"/><path class="ruzjusbdh"/><path class="i-v3skr5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:poetry"} {...others} />);
}

export default Component;
