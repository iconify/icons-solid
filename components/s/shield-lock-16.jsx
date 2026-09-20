import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zrw6ywbyh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zrw6ywbyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:shield-lock-16"} {...others} />);
}

export default Component;
