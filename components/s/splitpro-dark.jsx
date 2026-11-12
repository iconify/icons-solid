import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxxgysbnp.css';
import '../../css/p/pn9m9wb1i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pxxgysbnp"/><path class="pn9m9wb1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:splitpro-dark"} {...others} />);
}

export default Component;
