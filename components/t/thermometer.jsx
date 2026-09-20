import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfbx6odob.css';
import '../../css/r/r7sd-ibvw.css';
import '../../css/h/hrqt4gbvi.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="jfbx6odob"/><circle class="r7sd-ibvw"/><path class="hrqt4gbvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:thermometer"} {...others} />);
}

export default Component;
