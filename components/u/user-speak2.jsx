import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/chlsrtpkl.css';
import '../../css/n/nhushpb-h.css';
import '../../css/a/acuehpb-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="chlsrtpkl"/><path clip-rule="evenodd" class="nhushpb-h"/><path class="acuehpb-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:user-speak2"} {...others} />);
}

export default Component;
