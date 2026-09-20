import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-0y0ftzh.css';
import '../../css/q/q-dq2zato.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g-0y0ftzh"/><path class="q-dq2zato"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:windmill-dark"} {...others} />);
}

export default Component;
