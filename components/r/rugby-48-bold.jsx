import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5tmhcqgt.css';
import '../../css/z/zxkwv-2ro.css';
import '../../css/a/aary-jtpv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d5tmhcqgt"/><path class="zxkwv-2ro"/><path class="aary-jtpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rugby-48-bold"} {...others} />);
}

export default Component;
