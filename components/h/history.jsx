import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvm4kcb4a.css';
import '../../css/f/fu2jxxb6d.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tvm4kcb4a"/><path class="fu2jxxb6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:history"} {...others} />);
}

export default Component;
