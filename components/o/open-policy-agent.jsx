import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cg8b93b9e.css';
import '../../css/i/i-8x8lbgc.css';
import '../../css/l/lsj7k9b2o.css';

const viewBox = {"width":395.51,"height":435.76,"left":16.62,"top":-1.63};
const content = `<path class="cg8b93b9e"/><path class="i-8x8lbgc"/><path class="lsj7k9b2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:open-policy-agent"} {...others} />);
}

export default Component;
