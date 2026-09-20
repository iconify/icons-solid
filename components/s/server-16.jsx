import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/luejbu8oj.css';
import '../../css/k/k9kao6i0w.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="luejbu8oj"/><path clip-rule="evenodd" class="k9kao6i0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:server-16"} {...others} />);
}

export default Component;
