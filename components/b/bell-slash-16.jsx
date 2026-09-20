import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tt5mcm8zj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tt5mcm8zj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:bell-slash-16"} {...others} />);
}

export default Component;
