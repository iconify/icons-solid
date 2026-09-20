import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l04k3h--y.css';
import '../../css/v/v1qrver_f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l04k3h--y"/><path class="v1qrver_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:token-module"} {...others} />);
}

export default Component;
