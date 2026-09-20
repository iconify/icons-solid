import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zt4co4p0k.css';
import '../../css/l/ldauj8b4p.css';
import '../../css/x/xx_2p24jp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zt4co4p0k"/><path class="ldauj8b4p"/><path class="xx_2p24jp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:gramophone"} {...others} />);
}

export default Component;
