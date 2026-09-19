import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ibmndspam.css';
import '../../css/n/nb7pxabat.css';
import '../../css/d/dwcqehbef.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="ibmndspam"/><circle class="nb7pxabat"/><circle class="dwcqehbef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:color-filter-outline"} {...others} />);
}

export default Component;
