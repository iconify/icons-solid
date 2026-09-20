import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2dud7gav.css';
import '../../css/k/kfcxw6ofm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z2dud7gav"/><path class="kfcxw6ofm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:pin-location-duotone"} {...others} />);
}

export default Component;
