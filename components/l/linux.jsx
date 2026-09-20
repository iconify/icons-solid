import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jrbag7b_v.css';
import '../../css/n/nhphllbxb.css';
import '../../css/f/fyfohacvs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jrbag7b_v"/><path class="nhphllbxb"/><path class="fyfohacvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:linux"} {...others} />);
}

export default Component;
