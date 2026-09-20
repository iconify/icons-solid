import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wn0wiolsr.css';
import '../../css/b/bcj4m3bdn.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="wn0wiolsr"/><path class="bcj4m3bdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wizarr"} {...others} />);
}

export default Component;
