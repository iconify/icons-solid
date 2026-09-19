import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u3l6bnbdo.css';
import '../../css/l/ltww1dbla.css';
import '../../css/k/k2lu90bwr.css';
import '../../css/p/p0-xtibiq.css';
import '../../css/b/brsq9fqgy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="u3l6bnbdo"/><rect class="ltww1dbla"/><rect class="k2lu90bwr"/><path class="p0-xtibiq"/><path class="brsq9fqgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:charging-treasure"} {...others} />);
}

export default Component;
