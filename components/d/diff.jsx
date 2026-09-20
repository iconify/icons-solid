import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pl_7wtbbd.css';

const viewBox = {"width":13,"height":16};
const content = `<path class="pl_7wtbbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:diff"} {...others} />);
}

export default Component;
