import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/g/gj7mgbb6o.css';
import '../../css/e/efeuc0qbu.css';
import '../../css/b/bzs_6oz_t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="gj7mgbb6o"/><path class="efeuc0qbu"/><path class="bzs_6oz_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:shield-add"} {...others} />);
}

export default Component;
