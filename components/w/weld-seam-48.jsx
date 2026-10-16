import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpwsvx0jv.css';
import '../../css/n/n-kljywsc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kpwsvx0jv"/><path class="n-kljywsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:weld-seam-48"} {...others} />);
}

export default Component;
