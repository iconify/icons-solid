import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zim1xe5fl.css';
import '../../css/i/is-_b_bvj.css';
import '../../css/q/qtbfkyb0j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zim1xe5fl"/><path class="is-_b_bvj"/><path class="qtbfkyb0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:feather-48"} {...others} />);
}

export default Component;
