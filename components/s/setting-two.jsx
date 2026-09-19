import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/j/jjevecgxz.css';
import '../../css/c/csty3qb7g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="jjevecgxz"/><path class="csty3qb7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:setting-two"} {...others} />);
}

export default Component;
