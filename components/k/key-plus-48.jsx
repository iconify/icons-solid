import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zhs8peimt.css';
import '../../css/x/xuaqg0a7u.css';
import '../../css/g/gbjmahy1r.css';
import '../../css/b/bbxn-dufo.css';
import '../../css/k/kem81wb3i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zhs8peimt"/><path class="xuaqg0a7u"/><path class="gbjmahy1r"/><path class="bbxn-dufo"/><path class="kem81wb3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:key-plus-48"} {...others} />);
}

export default Component;
