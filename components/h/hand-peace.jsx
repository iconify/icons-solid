import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5ji-z8yd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k5ji-z8yd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-regular:hand-peace"} {...others} />);
}

export default Component;
