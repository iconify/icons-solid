import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h34p0iehr.css';
import '../../css/z/zab0-ccwk.css';
import '../../css/b/b-mdupdvm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h34p0iehr"/><path class="zab0-ccwk"/><path class="b-mdupdvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:quote-48"} {...others} />);
}

export default Component;
