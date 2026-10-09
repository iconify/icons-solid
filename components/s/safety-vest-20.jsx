import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xo04ejb3q.css';
import '../../css/t/tbxzsjbtj.css';
import '../../css/u/uz57xojdx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xo04ejb3q"/><path class="tbxzsjbtj"/><path class="uz57xojdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:safety-vest-20"} {...others} />);
}

export default Component;
