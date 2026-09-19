import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcc_rab_e.css';
import '../../css/b/b916efb9j.css';
import '../../css/w/w6jofhbjh.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="kcc_rab_e"/><path class="b916efb9j"/><path class="w6jofhbjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-instagram"} {...others} />);
}

export default Component;
