import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/thy6c7oyj.css';
import '../../css/b/biku6abqe.css';
import '../../css/r/rtryn3e-j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="thy6c7oyj"/><path class="biku6abqe"/><path class="rtryn3e-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:find-one"} {...others} />);
}

export default Component;
