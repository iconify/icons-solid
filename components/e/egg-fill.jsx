import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ef_45p5km.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ef_45p5km"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:egg-fill"} {...others} />);
}

export default Component;
