import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhx6xt5an.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qhx6xt5an"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:headphones"} {...others} />);
}

export default Component;
