import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-8aywbvv.css';
import '../../css/s/ss8e_zx0e.css';
import '../../css/m/mqbxjdkgv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v-8aywbvv"/><path clip-rule="evenodd" class="ss8e_zx0e"/><path class="mqbxjdkgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:rename-16"} {...others} />);
}

export default Component;
