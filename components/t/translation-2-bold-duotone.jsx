import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rma8h1e1k.css';
import '../../css/b/b4m79xbnb.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/x/x30gl9r7w.css';
import '../../css/d/dntco1pnf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rma8h1e1k"/><path class="b4m79xbnb"/><g class="xtpeb-edw"><path class="x30gl9r7w"/><path class="dntco1pnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:translation-2-bold-duotone"} {...others} />);
}

export default Component;
