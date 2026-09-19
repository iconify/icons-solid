import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjajftbvq.css';
import '../../css/m/md286fbip.css';
import '../../css/z/zlv8pebwp.css';
import '../../css/p/p8hwf5bcv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="yjajftbvq"/><g class="md286fbip"><path class="zlv8pebwp"/><path class="p8hwf5bcv"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:flux"} {...others} />);
}

export default Component;
