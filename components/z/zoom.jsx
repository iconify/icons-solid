import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0d1hcbit.css';
import '../../css/u/u2n18rsfg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q0d1hcbit"/><path class="u2n18rsfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:zoom"} {...others} />);
}

export default Component;
