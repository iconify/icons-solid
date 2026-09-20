import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1r1dsu7x.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="x1r1dsu7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tree-beside-bench-with-backrest"} {...others} />);
}

export default Component;
