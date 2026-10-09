import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m77m-bb1r.css';
import '../../css/f/f5bqv3-2b.css';
import '../../css/d/dq0waab5c.css';
import '../../css/y/yoxyoac9f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m77m-bb1r"/><path class="f5bqv3-2b"/><path class="dq0waab5c"/><path class="yoxyoac9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cloud-plus-48"} {...others} />);
}

export default Component;
