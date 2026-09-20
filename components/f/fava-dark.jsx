import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2wxgo90t.css';
import '../../css/b/bo9f9s_he.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w2wxgo90t"/><path class="bo9f9s_he"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fava-dark"} {...others} />);
}

export default Component;
