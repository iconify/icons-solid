import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4p9qeb4g.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l4p9qeb4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:cc-circle-fill"} {...others} />);
}

export default Component;
