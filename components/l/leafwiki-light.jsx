import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt_7jqbdu.css';
import '../../css/b/b96vt-g1e.css';
import '../../css/l/l78zzhbem.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dt_7jqbdu"/><path class="b96vt-g1e"/><path class="l78zzhbem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:leafwiki-light"} {...others} />);
}

export default Component;
