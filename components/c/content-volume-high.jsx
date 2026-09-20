import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o00hksstx.css';
import '../../css/a/a_r59m-6h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o00hksstx"/><path class="a_r59m-6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:content-volume-high"} {...others} />);
}

export default Component;
