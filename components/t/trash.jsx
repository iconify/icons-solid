import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e56rnvsiz.css';
import '../../css/d/dqy3eyidd.css';
import '../../css/u/uh57q-l3l.css';
import '../../css/q/qiqxy6bex.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="e56rnvsiz"/><path class="dqy3eyidd"/><path class="uh57q-l3l"/><path class="qiqxy6bex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:trash"} {...others} />);
}

export default Component;
