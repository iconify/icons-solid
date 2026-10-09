import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/op_j2nylw.css';
import '../../css/b/bz0ghpbjx.css';
import '../../css/z/z9_87vb0c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="op_j2nylw"/><path class="bz0ghpbjx"/><path class="z9_87vb0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:garage-48-bold"} {...others} />);
}

export default Component;
