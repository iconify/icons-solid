import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3eacdoxs.css';
import '../../css/m/m9i0cybsw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j3eacdoxs"/><path class="m9i0cybsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:at-sign-48"} {...others} />);
}

export default Component;
