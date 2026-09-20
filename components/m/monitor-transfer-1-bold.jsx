import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ms1l_22xi.css';
import '../../css/i/ini9cjbwb.css';
import '../../css/v/vrrpkgb-u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ms1l_22xi"/><path class="ini9cjbwb"/><path class="vrrpkgb-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:monitor-transfer-1-bold"} {...others} />);
}

export default Component;
