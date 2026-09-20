import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iuxxqtb6o.css';
import '../../css/a/a2fz70btr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="iuxxqtb6o"/><path class="a2fz70btr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:man-arm-raises-2-alternate-solid"} {...others} />);
}

export default Component;
