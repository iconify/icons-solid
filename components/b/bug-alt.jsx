import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3utn-y9c.css';
import '../../css/j/jjp5tkp_h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f3utn-y9c"/><path class="jjp5tkp_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bug-alt"} {...others} />);
}

export default Component;
