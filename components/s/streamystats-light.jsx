import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cl35mubuy.css';
import '../../css/w/wfpw4achp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cl35mubuy"/><path class="wfpw4achp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:streamystats-light"} {...others} />);
}

export default Component;
