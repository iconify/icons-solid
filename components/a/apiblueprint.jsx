import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mixj4hbyv.css';
import '../../css/e/e78ovcj5m.css';
import '../../css/a/avf63ltwu.css';
import '../../css/b/b3w4k5oip.css';

const viewBox = {"width":32,"height":32};
const content = `<rect class="mixj4hbyv"/><rect class="e78ovcj5m"/><rect class="avf63ltwu"/><path class="b3w4k5oip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:apiblueprint"} {...others} />);
}

export default Component;
