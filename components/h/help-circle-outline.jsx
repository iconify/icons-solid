import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr_xxwbkp.css';
import '../../css/d/dzrft4xru.css';
import '../../css/g/g47gadbou.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lr_xxwbkp"/><path class="dzrft4xru"/><circle class="g47gadbou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:help-circle-outline"} {...others} />);
}

export default Component;
