import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cu7mgydqv.css';
import '../../css/z/z78yszbru.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="cu7mgydqv"/><path class="z78yszbru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:send-email"} {...others} />);
}

export default Component;
