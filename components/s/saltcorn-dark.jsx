import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rrlw-04kw.css';
import '../../css/l/l3azjz_az.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rrlw-04kw"/><path class="l3azjz_az"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:saltcorn-dark"} {...others} />);
}

export default Component;
