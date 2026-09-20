import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlv2fmbfj.css';
import '../../css/u/u1l779tda.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vlv2fmbfj"/><path class="u1l779tda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pomerium"} {...others} />);
}

export default Component;
