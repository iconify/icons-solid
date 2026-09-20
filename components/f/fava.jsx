import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yktm7h6-w.css';
import '../../css/o/oc2ujn7ja.css';
import '../../css/c/cx-cwhw8g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yktm7h6-w"/><path class="oc2ujn7ja"/><path class="cx-cwhw8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fava"} {...others} />);
}

export default Component;
