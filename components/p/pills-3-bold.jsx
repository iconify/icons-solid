import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7y8ln4oe.css';
import '../../css/o/omloi9b0w.css';
import '../../css/z/z58pd3mxw.css';
import '../../css/m/mk28-wb2e.css';
import '../../css/j/jrsnf1igu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x7y8ln4oe"/><path class="omloi9b0w"/><path class="z58pd3mxw"/><path class="mk28-wb2e"/><path class="jrsnf1igu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pills-3-bold"} {...others} />);
}

export default Component;
