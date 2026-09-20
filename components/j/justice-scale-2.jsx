import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/ildb-bnvb.css';
import '../../css/x/xo77lkb4b.css';
import '../../css/y/y8rntqb3f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ildb-bnvb"/><path class="xo77lkb4b"/><path class="y8rntqb3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:justice-scale-2"} {...others} />);
}

export default Component;
