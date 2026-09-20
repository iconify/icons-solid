import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ummvq7b2g.css';
import '../../css/e/efhtg0b9p.css';
import '../../css/s/s5x-uoywa.css';
import '../../css/u/uoshz0ope.css';
import '../../css/v/v_67s9zbg.css';
import '../../css/r/r81bukzbz.css';
import '../../css/q/qfrwy8bml.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ummvq7b2g"/><path class="efhtg0b9p"/><path class="s5x-uoywa"/><path class="uoshz0ope"/><path class="v_67s9zbg"/><path class="r81bukzbz"/><path class="qfrwy8bml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:database-lock"} {...others} />);
}

export default Component;
