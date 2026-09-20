import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wlvs94qcj.css';
import '../../css/a/af5wgxf3a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wlvs94qcj"/><path class="af5wgxf3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:scooter"} {...others} />);
}

export default Component;
