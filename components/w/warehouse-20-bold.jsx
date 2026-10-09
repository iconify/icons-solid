import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2ll1nb8o.css';
import '../../css/z/zl7g3rzgo.css';
import '../../css/b/bi4oaoona.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e2ll1nb8o"/><path class="zl7g3rzgo"/><path class="bi4oaoona"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:warehouse-20-bold"} {...others} />);
}

export default Component;
