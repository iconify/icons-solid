import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r30t8djrj.css';
import '../../css/b/b-ejs9bpn.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="r30t8djrj"/><rect class="b-ejs9bpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:lock-locked-fill-12"} {...others} />);
}

export default Component;
