import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0nhpsynn.css';
import '../../css/r/rarrkzbto.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="f0nhpsynn"/><ellipse class="rarrkzbto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-rounded-bold-duotone"} {...others} />);
}

export default Component;
