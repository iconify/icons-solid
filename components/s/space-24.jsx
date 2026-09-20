import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwv8wbscl.css';
import '../../css/m/m7s0i2b6b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uwv8wbscl"/><path class="m7s0i2b6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:space-24"} {...others} />);
}

export default Component;
