import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eiqj4rbas.css';
import '../../css/z/z0v3o5vsb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eiqj4rbas"/><path class="z0v3o5vsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openprinting-cups"} {...others} />);
}

export default Component;
