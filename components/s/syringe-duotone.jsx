import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/s/sva33pbqa.css';
import '../../css/m/mak1mic-b.css';
import '../../css/q/qoill7eto.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="sva33pbqa"/><path clip-rule="evenodd" class="mak1mic-b"/></g><path class="qoill7eto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:syringe-duotone"} {...others} />);
}

export default Component;
