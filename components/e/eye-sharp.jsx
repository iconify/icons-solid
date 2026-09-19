import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shexgfo6g.css';
import '../../css/w/wsjn089ma.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="shexgfo6g"/><path class="wsjn089ma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:eye-sharp"} {...others} />);
}

export default Component;
