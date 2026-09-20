import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljc6226xi.css';
import '../../css/u/uqoy3wbla.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ljc6226xi"/><path class="uqoy3wbla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:frappe-lending"} {...others} />);
}

export default Component;
