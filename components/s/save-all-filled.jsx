import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltmjp_5as.css';
import '../../css/g/gs4dp93ml.css';
import '../../css/f/f_ydpsblm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ltmjp_5as"/><path class="gs4dp93ml"/><path class="f_ydpsblm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:save-all-filled"} {...others} />);
}

export default Component;
