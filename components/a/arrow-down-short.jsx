import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xo9n_mj0n.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xo9n_mj0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:arrow-down-short"} {...others} />);
}

export default Component;
