import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/kmydzbsxv.css';
import '../../css/b/bk8ioe9xt.css';
import '../../css/a/a1ppbdbvw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="kmydzbsxv"/><circle class="bk8ioe9xt"/><path class="a1ppbdbvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:court"} {...others} />);
}

export default Component;
