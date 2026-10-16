import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bym0aibji.css';
import '../../css/u/uo9vznb2b.css';
import '../../css/l/lydypnbam.css';
import '../../css/g/gm44-xbkh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bym0aibji"/><path class="uo9vznb2b"/><path class="lydypnbam"/><path class="gm44-xbkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-bus-48-bold"} {...others} />);
}

export default Component;
