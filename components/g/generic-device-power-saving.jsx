import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfektw75g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lfektw75g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:generic-device-power-saving"} {...others} />);
}

export default Component;
