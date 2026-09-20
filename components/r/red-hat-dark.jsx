import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oedqgxdbn.css';
import '../../css/u/uckwd9b6d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oedqgxdbn"/><path class="uckwd9b6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:red-hat-dark"} {...others} />);
}

export default Component;
