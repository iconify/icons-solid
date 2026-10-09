import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dn4hkfpso.css';
import '../../css/e/e1cs2-20w.css';
import '../../css/x/x72zhtbvy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dn4hkfpso"/><path class="e1cs2-20w"/><path class="x72zhtbvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:download-20"} {...others} />);
}

export default Component;
