import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/p/psxdx4bcl.css';
import '../../css/h/he--fc8qg.css';
import '../../css/b/bt89lfbsu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><rect class="psxdx4bcl"/><circle class="he--fc8qg"/><path class="bt89lfbsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:videocamera"} {...others} />);
}

export default Component;
