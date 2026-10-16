import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zx59guuve.css';
import '../../css/h/hapdmvwru.css';
import '../../css/k/k9m4xcmyy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zx59guuve"/><path class="hapdmvwru"/><path class="k9m4xcmyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clipboard-plus-48"} {...others} />);
}

export default Component;
