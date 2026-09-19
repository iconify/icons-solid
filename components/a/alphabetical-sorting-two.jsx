import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/ro-ndbboz.css';
import '../../css/c/c25wjobnk.css';
import '../../css/q/qidsd8b7v.css';
import '../../css/f/f33xojb2e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ro-ndbboz"/><path class="c25wjobnk"/><path class="qidsd8b7v"/><path class="f33xojb2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:alphabetical-sorting-two"} {...others} />);
}

export default Component;
