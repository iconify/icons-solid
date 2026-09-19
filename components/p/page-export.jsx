import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n58o9b3sw.css';
import '../../css/q/qsljfib0o.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="n58o9b3sw"/><path class="qsljfib0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:page-export"} {...others} />);
}

export default Component;
