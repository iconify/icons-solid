import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ghyioabfx.css';
import '../../css/i/iuv0n94zw.css';
import '../../css/n/nvnwx-40l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ghyioabfx"/><path clip-rule="evenodd" class="iuv0n94zw"/><path class="nvnwx-40l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:people-plus-one"} {...others} />);
}

export default Component;
