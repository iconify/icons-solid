import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xgk61_5ts.css';
import '../../css/i/i4y13ubio.css';
import '../../css/n/n-f605bde.css';
import '../../css/w/wzmyd8b0t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xgk61_5ts"/><path class="i4y13ubio"/><path class="n-f605bde"/><path class="wzmyd8b0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:seamside-light"} {...others} />);
}

export default Component;
