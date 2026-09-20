import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy8rokwbh.css';
import '../../css/e/eajtpz02m.css';
import '../../css/q/qxwq8bcbf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jy8rokwbh"/><path class="eajtpz02m"/><path class="qxwq8bcbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-manager-light"} {...others} />);
}

export default Component;
