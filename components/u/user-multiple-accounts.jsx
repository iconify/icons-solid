import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/uvyzzzbel.css';
import '../../css/p/pt40p0bcy.css';
import '../../css/v/vc8vlgbbc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="uvyzzzbel"/><path class="pt40p0bcy"/><path class="vc8vlgbbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:user-multiple-accounts"} {...others} />);
}

export default Component;
