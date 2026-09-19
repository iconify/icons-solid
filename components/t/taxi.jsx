import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-gn7d1_f.css';
import '../../css/t/twgw8uc6b.css';
import '../../css/c/cxn5zz6-q.css';
import '../../css/l/lk6wndo4g.css';
import '../../css/v/v39551bun.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="f-gn7d1_f"/><path class="twgw8uc6b"/><path class="cxn5zz6-q"/><path clip-rule="evenodd" class="lk6wndo4g"/><path class="v39551bun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:taxi"} {...others} />);
}

export default Component;
