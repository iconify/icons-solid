import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqw05nt-o.css';
import '../../css/c/cqbk9ybmn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pqw05nt-o"/><path class="cqbk9ybmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:unbound"} {...others} />);
}

export default Component;
