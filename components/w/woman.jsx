import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bcyvurbju.css';
import '../../css/z/zy09reb_v.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="bcyvurbju"/><path class="zy09reb_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:woman"} {...others} />);
}

export default Component;
