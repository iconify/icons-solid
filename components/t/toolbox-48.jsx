import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c25225b7t.css';
import '../../css/c/cy89d844n.css';
import '../../css/c/cqgc1xk8r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c25225b7t"/><path class="cy89d844n"/><path class="cqgc1xk8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:toolbox-48"} {...others} />);
}

export default Component;
