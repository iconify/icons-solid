import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7-vuo9nb.css';
import '../../css/x/x15-e255r.css';
import '../../css/o/o3km89xty.css';
import '../../css/w/wsf77guzo.css';

const viewBox = {"width":99.986,"height":100.002};
const content = `<path class="e7-vuo9nb"/><path class="x15-e255r"/><path class="o3km89xty"/><path class="wsf77guzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:app-store"} {...others} />);
}

export default Component;
