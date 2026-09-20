import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lim_l8bmc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lim_l8bmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:textalign-justifyleft"} {...others} />);
}

export default Component;
