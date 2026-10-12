import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0ne4_zha.css';
import '../../css/a/appx2gb4r.css';
import '../../css/e/em0ki7-fm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k0ne4_zha"/><path class="appx2gb4r"/><path class="em0ki7-fm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:paste-20-bold"} {...others} />);
}

export default Component;
