import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5jx2rb3f.css';
import '../../css/y/y2e1v-8ak.css';
import '../../css/n/n9az18p2h.css';
import '../../css/e/edj7wwb4r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a5jx2rb3f"/><path class="y2e1v-8ak"/><path class="n9az18p2h"/><path class="edj7wwb4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:rotate-to-portrait"} {...others} />);
}

export default Component;
