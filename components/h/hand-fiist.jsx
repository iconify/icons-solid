import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7_f_gx5j.css';
import '../../css/e/e4ubnueqe.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="t7_f_gx5j"/><path class="e4ubnueqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:hand-fiist"} {...others} />);
}

export default Component;
