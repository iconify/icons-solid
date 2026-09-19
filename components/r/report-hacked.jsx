import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pojn_z1wk.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="pojn_z1wk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:report-hacked"} {...others} />);
}

export default Component;
