import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/or3w7ac_p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="or3w7ac_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rybbit-light"} {...others} />);
}

export default Component;
