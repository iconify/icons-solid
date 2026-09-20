import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpk85c56s.css';
import '../../css/z/zt9kpc87r.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kpk85c56s"/><path clip-rule="evenodd" class="zt9kpc87r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:windows-unmaximize-16"} {...others} />);
}

export default Component;
