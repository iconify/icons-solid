import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xw_haib9d.css';
import '../../css/d/deidzy81h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xw_haib9d"/><path class="deidzy81h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:clippy-24"} {...others} />);
}

export default Component;
