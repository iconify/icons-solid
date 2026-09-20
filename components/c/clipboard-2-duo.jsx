import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zos92rv0b.css';
import '../../css/a/ahjcjrbwg.css';
import '../../css/b/bulnzub5r.css';
import '../../css/k/ka3joxbzu.css';
import '../../css/b/bgf8i4mat.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="zos92rv0b"/><path class="ahjcjrbwg"/><path clip-rule="evenodd" class="bulnzub5r"/><path class="ka3joxbzu"/><path class="bgf8i4mat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:clipboard-2-duo"} {...others} />);
}

export default Component;
