import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0395bcho.css';
import '../../css/j/j29g_4b6w.css';
import '../../css/k/kwq97piub.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m0395bcho"/><path class="j29g_4b6w"/><path class="kwq97piub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-forms-2019-light"} {...others} />);
}

export default Component;
