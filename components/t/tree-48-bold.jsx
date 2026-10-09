import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/br_hr0bcl.css';
import '../../css/g/gka_evgvf.css';
import '../../css/g/gw1hyez2s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="br_hr0bcl"/><path class="gka_evgvf"/><path class="gw1hyez2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tree-48-bold"} {...others} />);
}

export default Component;
