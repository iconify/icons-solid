import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_olbwbfe.css';
import '../../css/a/ag5dtyruo.css';
import '../../css/r/rhyscc7ul.css';
import '../../css/c/c5wi2rbqh.css';
import '../../css/c/cpg4bq6cc.css';
import '../../css/l/ldoh9zbts.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="p_olbwbfe"/><path class="ag5dtyruo"/><path class="rhyscc7ul"/><path class="c5wi2rbqh"/><path class="cpg4bq6cc"/><path class="ldoh9zbts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:zizmor"} {...others} />);
}

export default Component;
