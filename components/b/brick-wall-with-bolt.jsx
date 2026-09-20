import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2i7cg_sc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="b2i7cg_sc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:brick-wall-with-bolt"} {...others} />);
}

export default Component;
