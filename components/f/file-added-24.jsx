import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eh6xlccjr.css';
import '../../css/o/o-szn7-xv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eh6xlccjr"/><path class="o-szn7-xv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:file-added-24"} {...others} />);
}

export default Component;
