import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mlshrtbyk.css';
import '../../css/m/m8-q3inzh.css';
import '../../css/c/c3b89bbrx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mlshrtbyk"/><path class="m8-q3inzh"/><path class="c3b89bbrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-podium"} {...others} />);
}

export default Component;
