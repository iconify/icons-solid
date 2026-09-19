import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwvsdd0eg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gwvsdd0eg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:zoom-out"} {...others} />);
}

export default Component;
