import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1tx5ebwn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w1tx5ebwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:mouse-fill"} {...others} />);
}

export default Component;
