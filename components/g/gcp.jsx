import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmep3xodh.css';
import '../../css/o/oc7cps_zz.css';
import '../../css/y/y7zdj2uxz.css';
import '../../css/l/lerunzb0y.css';

const viewBox = {"width":300,"height":300};
const content = `<path class="zmep3xodh"/><path class="oc7cps_zz"/><path class="y7zdj2uxz"/><path class="lerunzb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:gcp"} {...others} />);
}

export default Component;
