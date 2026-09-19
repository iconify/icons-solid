import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/nkkj76b9u.css';
import '../../css/b/bwdpl5zyw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="nkkj76b9u"/><circle class="bwdpl5zyw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:direction-adjustment"} {...others} />);
}

export default Component;
