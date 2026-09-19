import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfg-xccrw.css';
import '../../css/q/qo397l2vm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cfg-xccrw"/><path class="qo397l2vm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-phone-landscape"} {...others} />);
}

export default Component;
