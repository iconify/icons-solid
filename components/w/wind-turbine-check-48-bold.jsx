import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0gei6bou.css';
import '../../css/d/dztgh4bcl.css';
import '../../css/b/b1sfwsxyj.css';
import '../../css/a/alivzijug.css';
import '../../css/c/c4tbdll5w.css';
import '../../css/z/zs372kprb.css';
import '../../css/l/l338p9bqe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f0gei6bou"/><path class="dztgh4bcl"/><path class="b1sfwsxyj"/><path class="alivzijug"/><path class="c4tbdll5w"/><path class="zs372kprb"/><path class="l338p9bqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-check-48-bold"} {...others} />);
}

export default Component;
