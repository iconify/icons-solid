import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k23_kvbcb.css';
import '../../css/b/b22tnbb6v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k23_kvbcb"/><path class="b22tnbb6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:paper-mill-48"} {...others} />);
}

export default Component;
