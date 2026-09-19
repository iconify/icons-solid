import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0vz-tbdb.css';
import '../../css/h/h5q9tn6hy.css';
import '../../css/r/riktqubqo.css';
import '../../css/z/zrbvzsbqf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b0vz-tbdb"/><path class="h5q9tn6hy"/><path class="riktqubqo"/><path class="zrbvzsbqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bear"} {...others} />);
}

export default Component;
