import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eow2v3j8v.css';
import '../../css/l/lylvmeb0j.css';
import '../../css/c/cgm5haclf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eow2v3j8v"/><path class="lylvmeb0j"/><path class="cgm5haclf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:chorizard-light"} {...others} />);
}

export default Component;
