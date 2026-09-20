import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-szn7-xv.css';
import '../../css/q/qtp0labzl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o-szn7-xv"/><path class="qtp0labzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:file-removed-24"} {...others} />);
}

export default Component;
