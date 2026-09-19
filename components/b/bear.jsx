import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i9x_6u7hu.css';
import '../../css/c/cu63mnb6h.css';
import '../../css/h/h4lclgb7y.css';
import '../../css/l/lkpmc8bcp.css';
import '../../css/v/v-yd37b-h.css';
import '../../css/i/it29v9bva.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="i9x_6u7hu"/><circle class="cu63mnb6h"/><circle class="h4lclgb7y"/><circle class="lkpmc8bcp"/><path class="v-yd37b-h"/><path class="it29v9bva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bear"} {...others} />);
}

export default Component;
