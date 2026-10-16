import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9uroy2xg.css';
import '../../css/x/xso8lt60u.css';
import '../../css/f/f0tp4idyv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e9uroy2xg"/><path class="xso8lt60u"/><path class="f0tp4idyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:filter-x-20-bold"} {...others} />);
}

export default Component;
