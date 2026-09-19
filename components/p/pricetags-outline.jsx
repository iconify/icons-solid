import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/neoc4fbwo.css';
import '../../css/u/ui33wlb3m.css';
import '../../css/m/midf3bbku.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="neoc4fbwo"/><path class="ui33wlb3m"/><path class="midf3bbku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:pricetags-outline"} {...others} />);
}

export default Component;
