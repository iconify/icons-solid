import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqaqbm0ih.css';
import '../../css/t/tsm0aygxn.css';

const viewBox = {"width":63,"height":64};
const content = `<path class="hqaqbm0ih"/><path class="tsm0aygxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-anesthesia"} {...others} />);
}

export default Component;
