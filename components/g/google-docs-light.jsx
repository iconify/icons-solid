import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obbl1ynnb.css';
import '../../css/j/jj_lj5bdm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="obbl1ynnb"/><path class="jj_lj5bdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-docs-light"} {...others} />);
}

export default Component;
