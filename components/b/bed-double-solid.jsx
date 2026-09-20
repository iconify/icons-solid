import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l10w-sbyp.css';
import '../../css/q/qrjc3lvtw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="l10w-sbyp"/><path class="qrjc3lvtw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:bed-double-solid"} {...others} />);
}

export default Component;
