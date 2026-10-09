import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyp8s5b_x.css';
import '../../css/i/im7csbc2a.css';
import '../../css/z/zqzklisui.css';
import '../../css/p/pkj7clbju.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vyp8s5b_x"/><path class="im7csbc2a"/><path class="zqzklisui"/><path class="pkj7clbju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-irradiance-48"} {...others} />);
}

export default Component;
