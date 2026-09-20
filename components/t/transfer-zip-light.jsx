import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzk874b3t.css';
import '../../css/j/j0nnx5bfb.css';
import '../../css/c/cp5bj9b5e.css';
import '../../css/k/k_26gp1en.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bzk874b3t"/><path class="j0nnx5bfb"/><path class="cp5bj9b5e"/><path class="k_26gp1en"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:transfer-zip-light"} {...others} />);
}

export default Component;
