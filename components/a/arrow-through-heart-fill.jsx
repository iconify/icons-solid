import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmz5xyl5g.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kmz5xyl5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:arrow-through-heart-fill"} {...others} />);
}

export default Component;
