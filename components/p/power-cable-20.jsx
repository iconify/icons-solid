import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qx3ng-mzk.css';
import '../../css/y/y8c1zsvzo.css';
import '../../css/z/zc3xw3bax.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qx3ng-mzk"/><path class="y8c1zsvzo"/><path class="zc3xw3bax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-cable-20"} {...others} />);
}

export default Component;
