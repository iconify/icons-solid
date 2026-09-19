import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxg--5aum.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nxg--5aum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-regular:face-grin-squint"} {...others} />);
}

export default Component;
