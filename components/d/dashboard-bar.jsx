import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/z7h9dmbpz.css';
import '../../css/t/tb6y_5xyd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><rect class="z7h9dmbpz"/><path class="tb6y_5xyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:dashboard-bar"} {...others} />);
}

export default Component;
