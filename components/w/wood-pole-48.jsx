import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlgi8bc5k.css';
import '../../css/m/m99dslsql.css';
import '../../css/w/wfgnynomx.css';
import '../../css/k/ku8yoiynn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vlgi8bc5k"/><path class="m99dslsql"/><path class="wfgnynomx"/><path class="ku8yoiynn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wood-pole-48"} {...others} />);
}

export default Component;
