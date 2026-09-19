import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr36qhbyi.css';
import '../../css/a/aoyh7r6mc.css';
import '../../css/l/lrwk-pf-f.css';
import '../../css/p/px128ob5z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="tr36qhbyi"><path class="aoyh7r6mc"/><path class="lrwk-pf-f"/><path class="px128ob5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:whistling"} {...others} />);
}

export default Component;
