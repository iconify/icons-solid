import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tw_r_-5rj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tw_r_-5rj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:hexagon-fill"} {...others} />);
}

export default Component;
