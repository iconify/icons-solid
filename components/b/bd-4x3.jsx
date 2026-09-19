import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l2x54nbfw.css';
import '../../css/c/c41bz1boa.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="l2x54nbfw"/><circle class="c41bz1boa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:bd-4x3"} {...others} />);
}

export default Component;
