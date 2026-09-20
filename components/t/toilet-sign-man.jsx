import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/g/gy35mbgbv.css';
import '../../css/n/nmskv_bux.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="gy35mbgbv"/><path class="nmskv_bux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:toilet-sign-man"} {...others} />);
}

export default Component;
