import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/v/vp420rb5o.css';
import '../../css/k/kuigothyl.css';
import '../../css/b/bbiysdm9e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="vp420rb5o"/><circle class="kuigothyl"/><path class="bbiysdm9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:folder-block-one"} {...others} />);
}

export default Component;
