import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/z7dq4587f.css';
import '../../css/s/sty_uesgs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="z7dq4587f"/><path class="sty_uesgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:message-privacy"} {...others} />);
}

export default Component;
