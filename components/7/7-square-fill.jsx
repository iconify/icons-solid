import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5mju5bjj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="a5mju5bjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:7-square-fill"} {...others} />);
}

export default Component;
