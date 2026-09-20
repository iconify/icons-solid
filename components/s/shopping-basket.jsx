import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv3nwjbqk.css';
import '../../css/d/da5fxxb_r.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="yv3nwjbqk"/><path class="da5fxxb_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:shopping-basket"} {...others} />);
}

export default Component;
