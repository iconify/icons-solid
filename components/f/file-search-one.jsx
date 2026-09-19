import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/w/wp78-jzxc.css';
import '../../css/e/eb6et-bht.css';
import '../../css/t/t4gy73cxx.css';
import '../../css/p/pw33lubvz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="wp78-jzxc"/><circle class="eb6et-bht"/><path class="t4gy73cxx"/><path class="pw33lubvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:file-search-one"} {...others} />);
}

export default Component;
