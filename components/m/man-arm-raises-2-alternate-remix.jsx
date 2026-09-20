import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mime5u9mm.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="mime5u9mm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:man-arm-raises-2-alternate-remix"} {...others} />);
}

export default Component;
